import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RenduDirective } from '../shared/rendu.directive';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule} from '@angular/material/core';
import { Assignment } from './assignment.model';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

@Component({
  selector: 'app-assignments',
  standalone: true,
  imports: [CommonModule, RenduDirective, MatDividerModule, FormsModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatButtonModule, MatNativeDateModule, AssignmentDetailComponent, MatListModule],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  assignementSelectionne!:Assignment;
  assignmentClique(assignment:Assignment) {
    this.assignementSelectionne = assignment;
  }
  ajoutActive = true;
  titre = "Mon application sur les Assignments !";
  nomDevoir = '';
  dateDevoir:Date | undefined;
  assignments:Assignment[] = [
    {
      nom: "Devoir Angular de Mr Buffa",
      dateDeRendu: new Date("2024-02-17"),
      rendu: false,
    },
    {
      nom: "Devoir J2EE de Mr Grin",
      dateDeRendu: new Date("2023-12-15"),
      rendu: false,
    },
    {
      nom: "Devoir Management de Mr Winter",
      dateDeRendu: new Date("2024-06-30"),
      rendu: true,
    }
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = false;
    }, 2000);
  }

  onSubmit(event:any) {
    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom=  this.nomDevoir,
    nouvelAssignment.dateDeRendu= this.dateDevoir || new Date(),
    nouvelAssignment.rendu = false;
    this.assignments.unshift(nouvelAssignment);
  }
}
