import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { mencionModel } from 'src/app/models/dbo/mencion.model';
import { mencionService } from 'src/app/services/dbo/mencion.service';

@Component({
  selector: 'app-mencion-form',
  templateUrl: './mencion-form.component.html',
  styleUrls: ['./mencion-form.component.scss'],
})

export class mencionFormComponent implements OnInit {

  frmTitle = 'mencion Form';
  editAction = false;
  frmmencion: FormGroup;
  mencionModel = new mencionModel();
  id_mencion = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private mencionService: mencionService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'mencion # ' + id.toString();
        this.editAction = true;
        this.id_mencion = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmmencion = this.formBuilder.group({
      id_facultad: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      nombre: new FormControl(null, [Validators.required, Validators.maxLength(45)]),

    });

  }

  initForm() {
    this.mencionService.get(this.id_mencion).subscribe((res: any) => {
      this.mencionModel = res.data[0];

      this.frmmencion.get('id_facultad').setValue(this.mencionModel.id_facultad);
      this.frmmencion.get('nombre').setValue(this.mencionModel.nombre);

    });
  }

  saveForm() {
    if (!this.frmmencion.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let mencion: mencionModel =  new mencionModel();
    mencion = this.frmmencion.value;
    
    if (this.editAction) {
      mencion.id_mencion = this.id_mencion;
      this.mencionService.update(mencion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/mencion']);
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
      this.mencionService.create(mencion).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/mencion']);
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
