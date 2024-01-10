import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent {
  @Input() assignmentTrasmis!:Assignment;
  constructor() {

  }
}
