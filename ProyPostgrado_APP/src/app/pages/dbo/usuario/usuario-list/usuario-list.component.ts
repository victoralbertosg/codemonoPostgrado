import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { usuarioModel } from 'src/app/models/dbo/usuario.model';
import { usuarioService } from 'src/app/services/dbo/usuario.service';

import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class usuarioListComponent implements OnInit, OnDestroy {

  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();

  usuarios: any[] = [];
  usuario: usuarioModel;

  usuarioFilter = new usuarioModel();


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.usuarios);
  displayedColumns: string[] = ['id_usuario', 'nombre', 'apellido', 'email', 'dni', 'id_rol', 'ciclo', 'password', 'estado', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private usuarioService: usuarioService,
    private cd: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1344px)');
    this._mobileQueryListener = () => cd.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  load() {

    this.usuarioService.getAll(this.usuarioFilter).subscribe(
      (res: any) => {
        this.usuarios = res.data;

        this.InfoTableDataSource = new MatTableDataSource(this.usuarios);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_usuario': return item.id_usuario;
              case 'nombre': return item.nombre;
              case 'apellido': return item.apellido;
              case 'email': return item.email;
              case 'dni': return item.dni;
              case 'id_rol': return item.id_rol;
              case 'ciclo': return item.ciclo;
              case 'password': return item.password;
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

  delete(usuario: any){
    Swal.fire({
      // title: '',
      html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
      <strong>Record # ${usuario.id_usuario}</strong>`,
      // icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id_usuario).subscribe((res: any) => {
          // console.log(res);
          if (res.data[0].errorId !== 0) {
            Swal.fire('Error', res.data[0].message, 'error');
            return;
          }

          Swal.fire('Delete', 'Record deleted', 'success').then(() => {
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


}

