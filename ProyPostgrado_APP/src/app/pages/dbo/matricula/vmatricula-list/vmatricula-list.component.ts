import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { View_MatriculaModel } from 'src/app/models/dbo/view-matricula.models';
import { MatriculaService } from 'src/app/services/dbo/matricula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vmatricula-list',
  templateUrl: './vmatricula-list.component.html',
  styleUrls: ['./vmatricula-list.component.scss']
})
export class VmatriculaListComponent implements OnInit, OnDestroy {


  
  sidenavStatus = '';
  mobileQuery: MediaQueryList;
  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;
  
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private matriculaService:MatriculaService,
    private cd: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1344px)');
    this._mobileQueryListener = () => cd.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

 

  matriculas: any[] = [];
//  matricula: MatriculaModel;

  matriculaVFilter = new View_MatriculaModel();

  // Material Table DataSource
  InfoTableDataSource = new MatTableDataSource(this.matriculas);
  displayedColumns: string[] = ['id_Curso_matricula', 'curso', 'apellido', 'nombre', 'mencion', 'periodo', 'ciclo'];

  // Material Table Pager
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  

  ngOnInit() {
    this.load();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  load() {

    this.matriculaService.getAllView(this.matriculaVFilter).subscribe(
      (res: any) => {
        this.matriculas = res.data;

        this.InfoTableDataSource = new MatTableDataSource(this.matriculas);
        this.InfoTableDataSource.paginator = this.paginator;
        this.InfoTableDataSource.sortingDataAccessor = (item: any, property) => {

        switch (property) {
              case 'id_Curso_matricula': return item.id_curso_matricula;
              case 'Curso': return item.nombre_curso;
              case 'apellido': return item.usuario_apellido;
              case 'nombre': return item.usuario_nombre;
              case 'mencion': return item.mencion_nombre;
              case 'periodo': return item.periodo;
              case 'ciclo': return item.ciclo;
           
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










