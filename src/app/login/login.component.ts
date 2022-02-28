import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewStudentService } from '../new-student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string = ''
  public email:string = ''
  public password:string = ''
  public confirmPassword:string = ''
  public allCurrentStudents: any = [];
  public found:any={}
  constructor(private _newStudentService:NewStudentService, public router:Router) { }

  ngOnInit(): void {
    this.allCurrentStudents = this._newStudentService.getAllStudents()
  }
  login(){
    this.found = this.allCurrentStudents.find((val:any, i:any)=>val.username==this.username && val.password==this.password && val.password==this.confirmPassword)
    if (this.found) {
      localStorage['currentUser'] = JSON.stringify(this.found)
      localStorage['curUser'] = JSON.stringify(this.found)
      this.router.navigate(['/dashboard'])
    } else {
      alert("Invalid input")
    }
  }
}
