import { Component, OnInit } from '@angular/core';

// Autocomplete
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

// Bottom Sheet Overview
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

// Dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

// Autocomplete
export interface User {
  name: string;
}

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  // Autocomplete
  myControl = new FormControl();
  options: User[] = [
    { name: 'Black Panter' },
    { name: 'Captain America' },
    { name: 'Ironman' },
    { name: 'Thor' },
    { name: 'Hulk' }
  ];
  // Autocomplete
  filteredOptions: Observable<User[]>;

  // Dialog
  animal: string;
  name: string;

  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // Autocomplete
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  // Autocomplete
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  // Autocomplete
  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  // Bottom Sheet
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  // Dialog
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  // Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
