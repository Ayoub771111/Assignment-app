import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RenduDirective } from '../rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { Assignment } from './assignment.model';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';


import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, FormsModule, 
    MatInputModule, MatDatepickerModule, 
    MatFormFieldModule, MatButtonModule,MatListModule,
    MatDatepickerModule,MatNativeDateModule,FormsModule,AssignmentDetailComponent ],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit  {
  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  nomDevoir:string="";
  dateDeRendu?:Date = new Date();
  ngOnInit(): void {
    setTimeout(() =>{
      this.ajoutActive = true;
    }, 2000);
  }

onSubmit() {
  const newAssignment = new Assignment(); newAssignment.nom = this.nomDevoir;
  newAssignment.dateDeRendu = this.dateDeRendu|| new Date() ;
  newAssignment.rendu = false;
  this.assignments.push(newAssignment);
  }
 
  assignments:Assignment[]=[
    {
      nom:"Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2024-02-17"),
      rendu: false
    },
    {
      nom:"Devoir J2EE de Mr Grin",
      dateDeRendu: new Date("2024-12-15"),
      rendu: false
    },
    {
      nom:"Devoir de Mr Winter, Gestion de projets",
      dateDeRendu: new Date("2024-11-10"),
      rendu: true
    },
  ];
}