import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { inscripcionModel } from 'src/app/models/dbo/inscripcion.model';
import { inscripcionService } from 'src/app/services/dbo/inscripcion.service';

import { MediaMatcher } from '@angular/cdk/layout';


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

  inscripcionFilter = new inscripcionModel();


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.inscripcions);
  displayedColumns: string[] = ['id_inscripcion', 'id_mencion', 'id_usuario', 'urlfile', 'estado', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private inscripcionService: inscripcionService,
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

    this.inscripcionService.getAll(this.inscripcionFilter).subscribe(
      (res: any) => {
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


}

