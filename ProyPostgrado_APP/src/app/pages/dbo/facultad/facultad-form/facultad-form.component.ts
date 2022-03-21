import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { facultadModel } from 'src/app/models/dbo/facultad.model';
import { facultadService } from 'src/app/services/dbo/facultad.service';

@Component({
  selector: 'app-facultad-form',
  templateUrl: './facultad-form.component.html',
  styleUrls: ['./facultad-form.component.scss'],
})

export class facultadFormComponent implements OnInit {

  frmTitle = 'facultad Form';
  editAction = false;
  frmfacultad: FormGroup;
  facultadModel = new facultadModel();
  id_facultad = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private facultadService: facultadService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'facultad # ' + id.toString();
        this.editAction = true;
        this.id_facultad = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmfacultad = this.formBuilder.group({
      nombre: new FormControl(null, [Validators.required, Validators.maxLength(50)]),

    });

  }

  initForm() {
    this.facultadService.get(this.id_facultad).subscribe((res: any) => {
      this.facultadModel = res.data[0];

      this.frmfacultad.get('nombre').setValue(this.facultadModel.nombre);

    });
  }

  saveForm() {
    if (!this.frmfacultad.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let facultad: facultadModel =  new facultadModel();
    facultad = this.frmfacultad.value;
    
    if (this.editAction) {
      facultad.id_facultad = this.id_facultad;
      this.facultadService.update(facultad).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/facultad']);
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
      this.facultadService.create(facultad).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/facultad']);
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
