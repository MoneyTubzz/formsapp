import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Istudent[] = [
    {id:1, name: 'Money Tubzz', department: 'Finance', age: 22},
    {id:2, name: 'Max Tassi', department: 'Math', age: 21},
    {id:3, name: 'Jenn Ass', department: 'Computer Science', age: 24},
    {id:4, name: 'Aali Booba', department: 'Math', age: 23},
  ]

  constructor() { }

  getStudents(){
    return this.students;
  }

  getStudent(id:number){
    return this.students.find(stud => stud.id === id);
  }
}
