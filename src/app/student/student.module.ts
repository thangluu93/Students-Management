
import { UIModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { StudentUpdateComponent } from './student-update/student-update.component';


const routes : Routes =[
  {path: 'studentlist',component:StudentListComponent},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'update', component:StudentUpdateComponent}

]

@NgModule({
  declarations: [DashBoardComponent, StudentListComponent, StudentUpdateComponent],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,


  ],
  exports:[
    StudentListComponent,
    DashBoardComponent
  ]
})
export class StudentModule { }
