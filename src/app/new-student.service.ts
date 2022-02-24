import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewStudentService {
  public allStudent :any = []
  addStudents(studentDetails:any) {
    this.allStudent.push(studentDetails)
    localStorage['localStudents'] = JSON.stringify(this.allStudent)
  }
  getAllStudents(){
    this.allStudent = localStorage['localStudents'] ? JSON.parse(localStorage['localStudents']) : []
    return this.allStudent
  }
  constructor() { }
}
