import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlRoutes } from './controls.routes';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatBadgeModule} from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BottomSheetOverviewExampleSheetComponent } from './advanced/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DialogOverviewExampleDialogComponent } from './advanced/dialog-overview-example-dialog/dialog-overview-example-dialog.component';


@NgModule({
  declarations: [
    ControlsComponent,
    BasicComponent,
    AdvancedComponent,
    BottomSheetOverviewExampleSheetComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ControlRoutes),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSortModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatRadioModule,
    MatBadgeModule,
    MatCheckboxModule,
    MatSliderModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatBottomSheetModule
  ]
})
export class ControlsModule { }
