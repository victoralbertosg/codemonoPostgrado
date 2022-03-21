import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { detalle_matriculaModel } from 'src/app/models/dbo/detalle-matricula.model';
import { detalle_matriculaService } from 'src/app/services/dbo/detalle-matricula.service';

@Component({
  selector: 'app-detalle-matricula-form',
  templateUrl: './detalle-matricula-form.component.html',
  styleUrls: ['./detalle-matricula-form.component.scss'],
})

export class detalle_matriculaFormComponent implements OnInit {

  frmTitle = 'detalle_matricula Form';
  editAction = false;
  frmdetalle_matricula: FormGroup;
  detalle_matriculaModel = new detalle_matriculaModel();
  id_curso_matricula = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private detalle_matriculaService: detalle_matriculaService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'detalle_matricula # ' + id.toString();
        this.editAction = true;
        this.id_curso_matricula = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmdetalle_matricula = this.formBuilder.group({
      id_matricula: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      id_curso: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      promedio: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.detalle_matriculaService.get(this.id_curso_matricula).subscribe((res: any) => {
      this.detalle_matriculaModel = res.data[0];

      this.frmdetalle_matricula.get('id_matricula').setValue(this.detalle_matriculaModel.id_matricula);
      this.frmdetalle_matricula.get('id_curso').setValue(this.detalle_matriculaModel.id_curso);
      this.frmdetalle_matricula.get('estado').setValue(this.detalle_matriculaModel.estado);
      this.frmdetalle_matricula.get('promedio').setValue(this.detalle_matriculaModel.promedio);

    });
  }

  saveForm() {
    if (!this.frmdetalle_matricula.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let detalle_matricula: detalle_matriculaModel =  new detalle_matriculaModel();
    detalle_matricula = this.frmdetalle_matricula.value;
    
    if (this.editAction) {
      detalle_matricula.id_curso_matricula = this.id_curso_matricula;
      this.detalle_matriculaService.update(detalle_matricula).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/detalle-matricula']);
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
      this.detalle_matriculaService.create(detalle_matricula).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/detalle-matricula']);
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
