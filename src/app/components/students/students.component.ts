import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Istudent } from '../../interfaces/istudent';


@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  students!: Istudent[];

  constructor(private studentService: StudentsService) {

  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(result => {
      this.students = result;
    });
  }

  deleteStudent(studentId: number) {
    if (confirm('Are you sure you want to delete this student?')) {
      //get array index of student
      let index = this.students.findIndex(stud => stud.id === studentId);
      //delete the student
      this.students.splice(index, 1);
      //delete student from db
      this.studentService.removeStudent(studentId).subscribe(result => {
        console.log("Student has been Deleted")
      })
    }
  }
}
