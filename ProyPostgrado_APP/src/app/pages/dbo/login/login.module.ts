import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";
import { LoginComponent } from "./login.component";
import { LoginRoutes } from "./login.routes";
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
      LoginComponent      
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(LoginRoutes),
      ComponentsModule,
      MatCardModule,            
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatIconModule,                           
      MatDialogModule,     
    ]
  })
  export class loginModule { }