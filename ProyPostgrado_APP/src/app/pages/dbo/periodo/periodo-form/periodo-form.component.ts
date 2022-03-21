import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { periodoModel } from 'src/app/models/dbo/periodo.model';
import { periodoService } from 'src/app/services/dbo/periodo.service';

@Component({
  selector: 'app-periodo-form',
  templateUrl: './periodo-form.component.html',
  styleUrls: ['./periodo-form.component.scss'],
})

export class periodoFormComponent implements OnInit {

  frmTitle = 'periodo Form';
  editAction = false;
  frmperiodo: FormGroup;
  periodoModel = new periodoModel();
  id_periodo = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private periodoService: periodoService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'periodo # ' + id.toString();
        this.editAction = true;
        this.id_periodo = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmperiodo = this.formBuilder.group({
      periodo: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      descripcion: new FormControl(null, [Validators.maxLength(50)]),
      estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.periodoService.get(this.id_periodo).subscribe((res: any) => {
      this.periodoModel = res.data[0];

      this.frmperiodo.get('periodo').setValue(this.periodoModel.periodo);
      this.frmperiodo.get('descripcion').setValue(this.periodoModel.descripcion);
      this.frmperiodo.get('estado').setValue(this.periodoModel.estado);

    });
  }

  saveForm() {
    if (!this.frmperiodo.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let periodo: periodoModel =  new periodoModel();
    periodo = this.frmperiodo.value;
    
    if (this.editAction) {
      periodo.id_periodo = this.id_periodo;
      this.periodoService.update(periodo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/periodo']);
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
      this.periodoService.create(periodo).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/periodo']);
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
