import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { roleModel } from 'src/app/models/dbo/role.model';
import { roleService } from 'src/app/services/dbo/role.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.scss'],
})

export class roleFormComponent implements OnInit {

  frmTitle = 'role Form';
  editAction = false;
  frmrole: FormGroup;
  roleModel = new roleModel();
  id_role = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private roleService: roleService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'role # ' + id.toString();
        this.editAction = true;
        this.id_role = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmrole = this.formBuilder.group({
      descripcion: new FormControl(null, [Validators.required, Validators.maxLength(35)]),

    });

  }

  initForm() {
    this.roleService.get(this.id_role).subscribe((res: any) => {
      this.roleModel = res.data[0];

      this.frmrole.get('descripcion').setValue(this.roleModel.descripcion);

    });
  }

  saveForm() {
    if (!this.frmrole.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let role: roleModel =  new roleModel();
    role = this.frmrole.value;
    
    if (this.editAction) {
      role.id_role = this.id_role;
      this.roleService.update(role).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/role']);
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
      this.roleService.create(role).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/role']);
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
