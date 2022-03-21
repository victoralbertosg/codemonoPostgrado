import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { usuarioService } from 'src/app/services/dbo/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})

export class usuarioFormComponent implements OnInit {

  frmTitle = 'usuario Form';
  editAction = false;
  frmusuario: FormGroup;
  usuarioModel = new usuarioModel();
  id_usuario = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: usuarioService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id && id > 0) {
        this.frmTitle = 'usuario # ' + id.toString();
        this.editAction = true;
        this.id_usuario = id;
        this.initForm();
      }
    });
  }

  createForm() {
    this.frmusuario = this.formBuilder.group({
      nombre: new FormControl(null, [Validators.required, Validators.maxLength(35)]),
      apellido: new FormControl(null, [Validators.required, Validators.maxLength(35)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(80)]),
      dni: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      id_rol: new FormControl(null, [Validators.required, Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      ciclo: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(25)]),
      estado: new FormControl(null, [Validators.pattern('^-?[0-9]*$'), Validators.min(-2147483648), Validators.max(2147483647)]),

    });

  }

  initForm() {
    this.usuarioService.get(this.id_usuario).subscribe((res: any) => {
      this.usuarioModel = res.data[0];

      this.frmusuario.get('nombre').setValue(this.usuarioModel.nombre);
      this.frmusuario.get('apellido').setValue(this.usuarioModel.apellido);
      this.frmusuario.get('email').setValue(this.usuarioModel.email);
      this.frmusuario.get('dni').setValue(this.usuarioModel.dni);
      this.frmusuario.get('id_rol').setValue(this.usuarioModel.id_rol);
      this.frmusuario.get('ciclo').setValue(this.usuarioModel.ciclo);
      this.frmusuario.get('password').setValue(this.usuarioModel.password);
      this.frmusuario.get('estado').setValue(this.usuarioModel.estado);

    });
  }

  saveForm() {
    if (!this.frmusuario.valid) {
      Swal.fire(
        'Error',
        'Please, fill in all the required fields correctly',
        'error'
      );
      return;
    }

    let usuario: usuarioModel =  new usuarioModel();
    usuario = this.frmusuario.value;
    
    if (this.editAction) {
      usuario.id_usuario = this.id_usuario;
      this.usuarioService.update(usuario).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Edit', 'Record edited', 'success').then(() => {
          this.router.navigate(['/dbo/usuario']);
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
      this.usuarioService.create(usuario).subscribe((res: any) => {
        // console.log(res);
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }

        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/usuario']);
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
