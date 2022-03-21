import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { cursoModel } from 'src/app/models/dbo/curso.model';
import { cursoService } from 'src/app/services/dbo/curso.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.scss'],
})

export class cursoFormComponent implements OnInit {

  frmTitle = 'curso Form';
  editAction = false;
  frmcurso: FormGroup;
  cursoModel = new cursoModel();
  id_curso = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private cursoService: cursoService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'curso # ' + id.toString();
        this.editAction = true;
        this.id_curso = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmcurso = this.formBuilder.group({
      id_mencion: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      nombre_curso: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
      credito: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      prerequisito: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      ciclo: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.cursoService.get(this.id_curso).subscribe((res: any) => {
      this.cursoModel = res.data[0];

      this.frmcurso.get('id_mencion').setValue(this.cursoModel.id_mencion);
      this.frmcurso.get('nombre_curso').setValue(this.cursoModel.nombre_curso);
      this.frmcurso.get('credito').setValue(this.cursoModel.credito);
      this.frmcurso.get('prerequisito').setValue(this.cursoModel.prerequisito);
      this.frmcurso.get('ciclo').setValue(this.cursoModel.ciclo);

    });
  }

  saveForm() {
    if (!this.frmcurso.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let curso: cursoModel =  new cursoModel();
    curso = this.frmcurso.value;
    
    if (this.editAction) {
      curso.id_curso = this.id_curso;
      this.cursoService.update(curso).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/curso']);
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
      this.cursoService.create(curso).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/curso']);
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
