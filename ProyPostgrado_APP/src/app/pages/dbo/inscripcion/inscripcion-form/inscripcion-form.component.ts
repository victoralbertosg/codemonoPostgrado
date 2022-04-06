import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { mencionModel } from 'src/app/models/dbo/mencion.model';
import { inscripcionService } from 'src/app/services/dbo/inscripcion.service';
import { mencionService } from 'src/app/services/dbo/mencion.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.scss'],
})

export class inscripcionFormComponent implements OnInit {

  frmTitle = 'inscripcion Form';
  editAction = false;
  frminscripcion: FormGroup;
  inscripcionModel = new inscripcionModel();
  id_inscripcion = 0;
  mencionModel= new mencionModel();
  menciones:any[]=[];



  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private inscripcionService: inscripcionService,
    private mencionService:mencionService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'inscripcion # ' + id.toString();
        this.editAction = true;
        this.id_inscripcion = id;
        this.initForm();
      }
    });

    this.mencionService.getAll(this.mencionModel).subscribe((rpta:any)=>{
      this.menciones=rpta.data;
      console.log('menciones',this.menciones);
    })

    

  }

  createForm() {
    this.frminscripcion = this.formBuilder.group({
      id_mencion: new FormControl(null, Validators.required),
      id_usuario: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      urlfile: new FormControl(null, [Validators.maxLength(200)]),
      //estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.inscripcionService.get(this.id_inscripcion).subscribe((res: any) => {
      this.inscripcionModel = res.data[0];

      this.frminscripcion.get('id_mencion').setValue(this.inscripcionModel.id_mencion);
      this.frminscripcion.get('id_usuario').setValue(this.inscripcionModel.id_usuario);
      this.frminscripcion.get('urlfile').setValue(this.inscripcionModel.urlfile);
      this.frminscripcion.get('estado').setValue(this.inscripcionModel.estado);

    });
  }

  saveForm() {

    if (!this.frminscripcion.valid) {
      Swal.fire(
        'Error',
        'Por favor, llene todos los campos obligatorios',
        'error'
      );
      return;
    }

    let inscripcion: inscripcionModel =  new inscripcionModel();
    inscripcion = this.frminscripcion.value;
    inscripcion.estado=1
    console.log('incripcion', inscripcion);    
    if (this.editAction) {
      inscripcion.id_inscripcion = this.id_inscripcion;
      this.inscripcionService.update(inscripcion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Editar', 'Registro modificado', 'success').then(() => {
          this.router.navigate(['/dbo/inscripcion']);
        });
      },
      (err) => {
        // Error
        // console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
        // Complete
      });
    }

    if (!this.editAction){
      this.inscripcionService.create(inscripcion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Registro creado', 'success').then(() => {
          this.router.navigate(['/dbo/inscripcion']);
        });
      },
      (err) => {
        // Error
        // console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
        // Complete
      });
    }

  }

}
