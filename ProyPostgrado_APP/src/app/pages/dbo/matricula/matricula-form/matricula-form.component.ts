import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { MatriculaModel } from 'src/app/models/dbo/matricula.model';
import { MatriculaService } from 'src/app/services/dbo/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.scss'],
})

export class MatriculaFormComponent implements OnInit {

  frmTitle = 'Matricula Form';
  editAction = false;
  frmMatricula: FormGroup;
  matriculaModel = new MatriculaModel();
  id_matricula = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private matriculaService: MatriculaService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'Matricula # ' + id.toString();
        this.editAction = true;
        this.id_matricula = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmMatricula = this.formBuilder.group({
      id_usuario: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      id_periodo: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      id_mencion: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      ciclo: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.matriculaService.get(this.id_matricula).subscribe((res: any) => {
      this.matriculaModel = res.data[0];

      this.frmMatricula.get('id_usuario').setValue(this.matriculaModel.id_usuario);
      this.frmMatricula.get('id_periodo').setValue(this.matriculaModel.id_periodo);
      this.frmMatricula.get('id_mencion').setValue(this.matriculaModel.id_mencion);
      this.frmMatricula.get('ciclo').setValue(this.matriculaModel.ciclo);
      this.frmMatricula.get('estado').setValue(this.matriculaModel.estado);

    });
  }

  saveForm() {
    if (!this.frmMatricula.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let matricula: MatriculaModel =  new MatriculaModel();
    matricula = this.frmMatricula.value;
    
    if (this.editAction) {
      matricula.id_matricula = this.id_matricula;
      this.matriculaService.update(matricula).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/matricula']);
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
      this.matriculaService.create(matricula).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/matricula']);
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
