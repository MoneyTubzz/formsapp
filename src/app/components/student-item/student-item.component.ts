import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-item',
  standalone: false,
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})
export class StudentItemComponent implements OnChanges {

  //Properties
  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter();

  //Methods
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  onDelete() {
    this.deleteStudentEvent.emit(this.student.id); // triggers custom event
  }

}
