import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Idepartment } from '../../interfaces/idepartment';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentForm;
  isEdit: boolean = false;
  editStudentId!: number;
  departments!: Idepartment[];

  constructor(private fb: FormBuilder, private studentService: StudentsService, private route: ActivatedRoute, private deptService: DepartmentsService){
    
    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      department_id: [0, [Validators.required]],
      age: [0, [Validators.required]],
    });

    this.deptService.getAllDepartments().subscribe(result =>{ //get all departments from db
      this.departments = result;
    });

    let studentId: any = this.route.snapshot.paramMap.get('student_id'); //retrieve id from url

    if (studentId){//check if to enter edit mode
    this.editStudentId = parseInt(studentId); // convert id to numnere
    this.isEdit = true;
    }

    this.studentService.getSingleStudent(this.editStudentId).subscribe(result=>{
      this.studentForm.patchValue(result); // populate form w/ student data
    });

  }

  onSubmit() {
  if (this.isEdit){
    this.updateStudent();
  }else{
    this.createStudent();
  }
  }

  createStudent(){
    const formData = this.studentForm.value;
    this.studentService.createStudent(formData).subscribe(result => {
      console.log(result);
      alert('student has been Created');
      this.studentForm.reset()
    });
  }

  updateStudent(){
    const formData = this.studentForm.value;
    this.studentService.updateStudent(this.editStudentId, formData).subscribe(result => {
      console.log(result);
      alert('student has been Updated');
    });
  }

}
