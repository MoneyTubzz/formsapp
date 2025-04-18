import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-item',
  standalone: false,
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent {

  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter();

  onDelete() {
    this.deleteStudentEvent.emit(this.student.id);
  }

}
