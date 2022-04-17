import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { inscripcionService } from 'src/app/services/dbo/inscripcion.service';
import { usuarioService } from 'src/app/services/dbo/usuario.service';

import { MediaMatcher } from '@angular/cdk/layout';
import { ApiauthService } from 'src/app/services/dbo/apiauth.service';
import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { mencionService } from 'src/app/services/dbo/mencion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscripcion-list',
  templateUrl: './inscripcion-list.component.html',
  styleUrls: ['./inscripcion-list.component.scss']
})
export class inscripcionListComponent implements OnInit, OnDestroy {

  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();

  inscripcions: any[] = [];
  inscripcion: inscripcionModel;
  dataFiltered:any[]=[];

  inscripcionFilter = new inscripcionModel();
  rol?:number;
  dni?:number;
  listaUsuarioDni:usuarioModel[]=[];
  usuario?:usuarioModel;
  nombre?:string;
  idusuario?:number;
  idusuarioSubs?:any; 
  


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.inscripcions);
  displayedColumns: string[] = ['id_inscripcion', 'id_mencion', 'id_usuario', 'urlfile', 'estado', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private inscripcionService: inscripcionService,
    private authService:ApiauthService,
    private usuarioService:usuarioService,
    private mencionService:mencionService,
    private cd: ChangeDetectorRef,
    private media: MediaMatcher,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1344px)');
    this._mobileQueryListener = () => cd.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  
    // obtener rol y dni de los datos de acceso
    this.authService.getuserDataObs().subscribe(rpta=>{
        if (rpta!=null){
        this.rol=rpta.rol;
        this.dni=rpta.dni;   
      }
    })
   
   //obtener id_usuario a partir del dni
    this.usuarioService.getUsuarioByDni(this.dni);
    //usuario bihaibord service
    this.idusuarioSubs=this.usuarioService.getuser().subscribe(r=>this.idusuario=r.id_usuario);  
    console.log('dni',this.dni) ;
    console.log('idusuario',this.idusuario);
    this.load();    
   
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.idusuarioSubs.unsubscribe();
  }


  load() {
   
    this.inscripcionService.getAll(this.inscripcionFilter).subscribe(
      (res: any) => {
        ///filtra por id usuario para rol 1      
        if (this.rol===1)res.data=res.data.filter((rf:any)=>rf.id_usuario===this.idusuario);                                      
         
        res.data.map(r=>{         
          switch (r.estado){
            case 1:  r.estado='Nuevo' ;break;
            case 2:  r.estado='Aprobado';break;
            case 3:  r.estado='Observado';break;            
          };       
         
          this.mencionService.get(r.id_mencion).subscribe((rm:any)=>{
              r.id_mencion=rm.data[0].nombre;
          })
          this.usuarioService.get(r.id_usuario).subscribe((ru:any)=>{           
            r.id_usuario=ru.data[0].nombre;
          });      

        });           
                 
        this.inscripcions = res.data;
        
        this.InfoTableDataSource = new MatTableDataSource(this.inscripcions);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_inscripcion': return item.id_inscripcion;
              case 'id_mencion': return item.id_mencion;
              case 'id_usuario': return item.id_usuario;
              case 'urlfile': return item.urlfile;
              case 'estado': return item.estado;
              case 'action': return '';
            default: return item[property];
          }
        };

        this.InfoTableDataSource.sort = this.sort;
        this.dtTrigger.next();
      },
      (err) => { 
        //console.log(err);
        Swal.fire('Error', 'Unexpected error', 'error');
      },
      () => {
      }
    );
  }

  changeStatus(){

    Swal.fire({
      icon: 'info',
      title: 'Oops...',
      text: 'Feature available in Professional version'
    });

  }

  delete(inscripcion: any){
    Swal.fire({
      // title: '',
      html: `<h4>Desea <strong><u>eliminar permanentemente</u></strong> este registro?</h4>  <br>
      <strong>Record # ${inscripcion.id_inscripcion}</strong>`,
      // icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.inscripcionService.delete(inscripcion.id_inscripcion).subscribe((res: any) => {
          // console.log(res);
          if (res.data[0].errorId !== 0) {
            Swal.fire('Error', res.data[0].message, 'error');
            return;
          }

          Swal.fire('Eliminar', 'Registro eliminado', 'success').then(() => {
            this.load();
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
    });
  }

  // Material Table Filter Function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.InfoTableDataSource.filter = filterValue;
  }

  // Switch group active/inactive
  toggleGroup(event: string) {
  }

  edit(){
    this.inscripcionService.seteditar(true);
  }
  
  matricula(inscripcion:any){    
    this.inscripcionService.get(inscripcion.id_inscripcion).subscribe((i:inscripcionModel)=>{
     // console.log ('inscripcion enviar',i);    
      if (i!=null){                    
          this.inscripcionService.setInscripcion(i);          
        }
        //console.log ('inscripcion enviar',i); 
        
    }) 
    
    this.router.navigate(['/dbo/matricula/add/']); 
  }

}




