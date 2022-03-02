import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewStudentService } from '../new-student.service';
import { bankInterface } from '../type/student.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public username:string = ""
  public email:string = ""
  public password:string = "";
  public phone_number:number = 0;
  public account_no: string = "";
  public account_bal: number = 50000;
  public transfer:[] =[];
  public wallet:[] =[];
  public allCurrentStudents:bankInterface[]=[]
  constructor(public NewStudentService: NewStudentService, public router:Router) { }

  ngOnInit(): void {
    // longer code if else statement

    // if (localStorage['localStudents']){
    //   this.allCurrentStudents = JSON.parse(localStorage['localStudents'])
    // } else {
    //   this.allCurrentStudents = []
    // }

    // shorter code ternary operator
    // this.allCurrentStudents = localStorage['localStudents'] ? JSON.parse(localStorage['localStudents']) : []
    this.allCurrentStudents = this.NewStudentService.getAllStudents()
    console.log(this.allCurrentStudents);
  }
  addStudents(){
    console.log(this.account_no);
    this.account_no =`62626${ Math.floor(Math.random()*100000)}`;
    let {username, email, password, phone_number, account_no, account_bal, transfer, wallet} = this
    
    this.NewStudentService.addStudents({username, email, password, phone_number, account_no, account_bal, wallet, transfer})
    this.router.navigate(["/"])
  }
}
