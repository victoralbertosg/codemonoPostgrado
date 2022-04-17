import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { mencionModel } from 'src/app/models/dbo/mencion.model';
import { inscripcionService } from 'src/app/services/dbo/inscripcion.service';
import { mencionService } from 'src/app/services/dbo/mencion.service';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';
import { usuarioService } from 'src/app/services/dbo/usuario.service';
import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.scss'],
})

export class inscripcionFormComponent implements OnInit, OnDestroy {

  frmTitle = 'Formulario de inscripción';
  editAction = false;
  frminscripcion: FormGroup;
  inscripcionModel = new inscripcionModel();
  id_inscripcion = 0;
  mencionModel= new mencionModel();
  menciones:any[]=[];
  dni?:number;
  rol?:number;
 //usuarioModel=new usuarioModel();
  listaUsuarioDni:usuarioModel[]=[];
  usuario:usuarioModel=new usuarioModel;
  //radio Button estado inscripcion
  estadoSeleccionado: string;
  estados: string[] = ['Aprobado', 'Observado'];
  editar: boolean;
  //guardar usuario a modificar
  idusuario_mod:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private inscripcionService: inscripcionService,
    private authService:ApiauthService,
    private usuarioService:usuarioService,
    private mencionService:mencionService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.createForm();

  }
  ngOnDestroy(): void {
    this.inscripcionService.seteditar(false);
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
    }) 
    
    this.authService.getuserDataObs().subscribe(r=>{
      if (r!=null){
      this.dni=r.dni;
      this.rol=r.rol;}
    })    
       
     /* this.usuarioService.getUsuarioByDni(this.dni).subscribe((r:any)=>{     
      this.listaUsuarioDni.push(r[0]);
      this.usuario=this.listaUsuarioDni[0];                  
    }) */

    this.usuarioService.getUsuarioByDni(this.dni);
    this.usuarioService.getuser().subscribe(u=>this.usuario=u);
    //verificar si es de editar
    this.editar=this.inscripcionService.geteditar();
  }

  createForm() {
    this.frminscripcion = this.formBuilder.group({
      id_mencion: new FormControl(null, Validators.required),      
      urlfile: new FormControl(null, [Validators.maxLength(200)]),
      estado: new FormControl(null, [Validators.maxLength(200)])    
    });

  }

  initForm() {
    this.inscripcionService.get(this.id_inscripcion).subscribe((res: any) => {
      this.inscripcionModel = res.data[0];
      this.frminscripcion.get('id_mencion').setValue(this.inscripcionModel.id_mencion);
      this.idusuario_mod=this.inscripcionModel.id_usuario;
      this.frminscripcion.get('urlfile').setValue(this.inscripcionModel.urlfile);      
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
    if (!this.editAction) inscripcion.estado=1;
    if(this.editar==true) inscripcion.estado=1;   
    if (!this.editAction) inscripcion.id_usuario=this.usuario.id_usuario;     
    if (this.editAction) {
      inscripcion.id_usuario=this.idusuario_mod;                   
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
