import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<Istudent[]>('http://localhost:3000/students');
  }

  getSingleStudent(id: number){
    return this.http.get<Istudent>('http://localhost:3000/students/' + id);
  }

  createStudent(formData: any){
    return this.http.post<Istudent>('http://localhost:3000/students', formData);
  }

  removeStudent(id: number) {
    return this.http.delete<Istudent>('http://localhost:3000/students/' + id);
  }

  updateStudent(id: number, formData: any) {
    return this.http.patch<Istudent>('http://localhost:3000/students/' + id, formData);
  }
}
