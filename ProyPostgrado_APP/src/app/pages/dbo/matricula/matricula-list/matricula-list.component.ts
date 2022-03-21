import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { MatriculaModel } from 'src/app/models/dbo/matricula.model';
import { MatriculaService } from 'src/app/services/dbo/matricula.service';

import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-matricula-list',
  templateUrl: './matricula-list.component.html',
  styleUrls: ['./matricula-list.component.scss']
})
export class MatriculaListComponent implements OnInit, OnDestroy {

  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();

  matriculas: any[] = [];
  matricula: MatriculaModel;

  matriculaFilter = new MatriculaModel();


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.matriculas);
  displayedColumns: string[] = ['id_matricula', 'id_usuario', 'id_periodo', 'id_mencion', 'ciclo', 'estado', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private matriculaService: MatriculaService,
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

    this.matriculaService.getAll(this.matriculaFilter).subscribe(
      (res: any) => {
        this.matriculas = res.data;

        this.InfoTableDataSource = new MatTableDataSource(this.matriculas);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_matricula': return item.id_matricula;
              case 'id_usuario': return item.id_usuario;
              case 'id_periodo': return item.id_periodo;
              case 'id_mencion': return item.id_mencion;
              case 'ciclo': return item.ciclo;
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

  delete(matricula: any){
    Swal.fire({
      // title: '',
      html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
      <strong>Record # ${matricula.id_matricula}</strong>`,
      // icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.matriculaService.delete(matricula.id_matricula).subscribe((res: any) => {
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

