import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DateAdapter } from '@angular/material/core';

import { MatriculaModel } from 'src/app/models/dbo/matricula.model';
import { MatriculaService } from 'src/app/services/dbo/matricula.service';
import { inscripcionService } from 'src/app/services/dbo/inscripcion.service';
import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { inscripcionmModel } from 'src/app/models/dbo/inscripcionm.model';
import { usuarioService } from 'src/app/services/dbo/usuario.service';
import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { alumno_avanceModel } from 'src/app/models/dbo/alumno-avance.model';
import { cursoService } from 'src/app/services/dbo/curso.service';
import { cursoModel } from 'src/app/models/dbo/curso.model';
import { detalle_matriculaService } from 'src/app/services/dbo/detalle-matricula.service';
import { detalle_matriculaModel } from 'src/app/models/dbo/detalle-matricula.model';


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
  inscripcion:inscripcionModel;
  i:inscripcionModel[]=[];
  u:usuarioModel[]=[];
  idusuario:number;
  usuario:usuarioModel;
  alumno_avance:alumno_avanceModel;
  curso?:cursoModel;
  cursos?:any[]=[];
  cursosA?:any[]=[];
  detalleMatricula?:detalle_matriculaModel;


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private matriculaService: MatriculaService,
    private inscripcionService: inscripcionService,
    //private alumno_avanceService:alumno_avanceService,
    private detalle_matriculaService:detalle_matriculaService,
    private cursoService:cursoService,
    private usuarioService: usuarioService,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.dateAdapter.setLocale('en-GB'); //dd/MM/yyyy
    this.detalleMatricula=new detalle_matriculaModel();
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
    this.inscripcionService.getinscripcionSubject().subscribe((i:any)=>{
    if (i!=null) {        
      //pasa modelo inscripcion en arreglo inscripcion
      this.i=i.data;
      //asigna el primer modelo del arreglo en modelo inscripcion
      this.inscripcion=this.i[0];                                 
      this.idusuario=this.inscripcion.id_usuario;       
      //repite el proceso para usuario
      this.usuarioService.get(this.idusuario).subscribe((u:any)=>{
        if(u!=null){
          this.u=u.data;
          this.usuario=this.u[0];          
        }         
        this.cursoService.getAll(this.curso).subscribe((r:any)=>{                   
          console.log('ciclo',this.usuario.ciclo);
          console.log('mencion',this.inscripcion.id_mencion);
          r.data=r.data.filter((rf:any)=>rf.ciclo===this.usuario.ciclo+1 && rf.id_mencion===this.inscripcion.id_mencion);
          this.cursos=r.data;
          console.log('cursos dentro',this.cursos);
          //console.log('rrrrrrrrrrr',r.data);       
          this.initFormNuevo(); 
       });           
    });
   }}); 
  };
       
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
  initFormNuevo(){
    
    this.frmMatricula.get('id_usuario').setValue(this.inscripcion.id_usuario);
    this.frmMatricula.get('id_periodo').setValue(2);
    this.frmMatricula.get('id_mencion').setValue(this.inscripcion.id_mencion);
   //valida el ciclo el cual continua
    if (this.usuario.ciclo!=null){
      this.frmMatricula.get('ciclo').setValue(this.usuario.ciclo+1)}
      else {
        this.frmMatricula.get('ciclo').setValue(1)
      }   
    this.frmMatricula.get('estado').setValue(1);   
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
      
    if (this.cursos.length>0){
      this.matriculaService.create(matricula).subscribe((res: any) => {      
        if (res.data[0].errorId !== 0) {
          Swal.fire('Error', res.data[0].message, 'error');
          return;
        }
        //actualizar el campo ciclo en tabla usuario
        this.usuario.ciclo=this.frmMatricula.get('ciclo').value;                    
        this.usuarioService.update(this.usuario).subscribe(r=>console.log(r));
        Swal.fire('Create', 'Record created', 'success').then(() => {
          this.router.navigate(['/dbo/incripcion']);
        });

        //actualizar detalle matricula            
        this.detalleMatricula.id_matricula=res.data[0].id_matricula;                        
        this.cursos.forEach((value,index)=>{                   
          this.detalleMatricula.id_curso=value.id_curso;
          //grabar el detalle de matricula
              this.detalle_matriculaService.create(this.detalleMatricula).subscribe(r=>console.log(r));
        });   
        //this.art.forEach((value, index)  => {.......});
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
    else{
      Swal.fire('Error', 'no hay cursos a matricular', 'error');
      return;
    }









    }






  }

}

