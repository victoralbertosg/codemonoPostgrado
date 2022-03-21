import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { FormBuilder } from '@angular/forms';

import { roleModel } from 'src/app/models/dbo/role.model';
import { roleService } from 'src/app/services/dbo/role.service';

import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class roleListComponent implements OnInit, OnDestroy {

  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();

  roles: any[] = [];
  role: roleModel;

  roleFilter = new roleModel();


  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.roles);
  displayedColumns: string[] = ['id_role', 'descripcion', 'Action'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private roleService: roleService,
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

    this.roleService.getAll(this.roleFilter).subscribe(
      (res: any) => {
        this.roles = res.data;

        this.InfoTableDataSource = new MatTableDataSource(this.roles);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_role': return item.id_role;
              case 'descripcion': return item.descripcion;
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

  delete(role: any){
    Swal.fire({
      // title: '',
      html: `<h4>Do you want to <strong><u>delete permanently</u></strong> this record?</h4>  <br>
      <strong>Record # ${role.id_role}</strong>`,
      // icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.value) {
        this.roleService.delete(role.id_role).subscribe((res: any) => {
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

