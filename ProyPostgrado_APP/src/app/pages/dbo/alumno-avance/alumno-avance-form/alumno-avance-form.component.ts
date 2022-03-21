import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { alumno_avanceModel } from 'src/app/models/dbo/alumno-avance.model';
import { alumno_avanceService } from 'src/app/services/dbo/alumno-avance.service';

@Component({
  selector: 'app-alumno-avance-form',
  templateUrl: './alumno-avance-form.component.html',
  styleUrls: ['./alumno-avance-form.component.scss'],
})

export class alumno_avanceFormComponent implements OnInit {

  frmTitle = 'alumno_avance Form';
  editAction = false;
  frmalumno_avance: FormGroup;
  alumno_avanceModel = new alumno_avanceModel();
  id_avance = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alumno_avanceService: alumno_avanceService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'alumno_avance # ' + id.toString();
        this.editAction = true;
        this.id_avance = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmalumno_avance = this.formBuilder.group({
      id_usuario: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      ciclo: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      fecha_registro: new FormControl(null),
      estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.alumno_avanceService.get(this.id_avance).subscribe((res: any) => {
      this.alumno_avanceModel = res.data[0];

      this.frmalumno_avance.get('id_usuario').setValue(this.alumno_avanceModel.id_usuario);
      this.frmalumno_avance.get('ciclo').setValue(this.alumno_avanceModel.ciclo);
      if (this.alumno_avanceModel.fecha_registro != null) this.frmalumno_avance.get('fecha_registro').setValue(new Date(this.alumno_avanceModel.fecha_registro));
      this.frmalumno_avance.get('estado').setValue(this.alumno_avanceModel.estado);

    });
  }

  saveForm() {
    if (!this.frmalumno_avance.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let alumno_avance: alumno_avanceModel =  new alumno_avanceModel();
    alumno_avance = this.frmalumno_avance.value;
    
    if (this.editAction) {
      alumno_avance.id_avance = this.id_avance;
      this.alumno_avanceService.update(alumno_avance).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/alumno-avance']);
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
      this.alumno_avanceService.create(alumno_avance).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/alumno-avance']);
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
