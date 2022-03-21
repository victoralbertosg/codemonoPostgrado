import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { detalle_matriculaModel } from 'src/app/models/dbo/detalle-matricula.model';
import { detalle_matriculaService } from 'src/app/services/dbo/detalle-matricula.service';

import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-detalle-matricula-list',
  templateUrl: './detalle-matricula-list.component.html',
  styleUrls: ['./detalle-matricula-list.component.scss']
})
export class detalle_matriculaListComponent implements OnInit, OnDestroy {

  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();

  detalle_matriculas: any[] = [];
  detalle_matricula: detalle_matriculaModel;

  detalle_matriculaFilter = new detalle_matriculaModel();


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.detalle_matriculas);
  displayedColumns: string[] = ['id_curso_matricula', 'id_matricula', 'id_curso', 'estado', 'promedio', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private detalle_matriculaService: detalle_matriculaService,
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

    this.detalle_matriculaService.getAll(this.detalle_matriculaFilter).subscribe(
      (res: any) => {
        this.detalle_matriculas = res.data;

        this.InfoTableDataSource = new MatTableDataSource(this.detalle_matriculas);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_curso_matricula': return item.id_curso_matricula;
              case 'id_matricula': return item.id_matricula;
              case 'id_curso': return item.id_curso;
              case 'estado': return item.estado;
              case 'promedio': return item.promedio;
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

  delete(detalle_matricula: any){
    Swal.fire({
      // title: '',
      html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
      <strong>Record # ${detalle_matricula.id_curso_matricula}</strong>`,
      // icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.detalle_matriculaService.delete(detalle_matricula.id_curso_matricula).subscribe((res: any) => {
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

