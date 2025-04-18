import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students: Istudent[];

  constructor (private studentService: StudentsService){
    this.students = studentService.getStudents();
  }

  deleteStudent(studentId: number){
    let index = this.students.findIndex(stud => stud.id === studentId);
    this.students.splice(index,1);
  }

}
