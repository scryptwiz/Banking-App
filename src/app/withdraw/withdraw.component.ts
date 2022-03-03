import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  public account_no: any ='';
  public amount: any ='';
  public password: any ="";
  public allUsers: any ='';
  public editedSenderIndexOf: any ='';
  public curUser: any ='';
  constructor() { }

  ngOnInit(): void {
    this.allUsers = JSON.parse (localStorage['localStudents']);
    console.log(this.allUsers);
    
    this.curUser = JSON.parse(localStorage['curUser']);
    console.log(this.curUser);
    
  }
  withdraw(){
    let found =this.allUsers.find((val:any)=>this.curUser.username==val.username)
    this.editedSenderIndexOf = this.allUsers.indexOf(found)
    console.log(this.editedSenderIndexOf);
    let { amount, account_no, password } = this
    if ((amount=="" && account_no=="" && password=="") || (amount=="" || account_no=="" || password=="")) {
      alert("Please fill in the neccessary information");
    }
    else{
    this.curUser.account_bal = this.curUser.account_bal-this.amount;
    this.allUsers[this.editedSenderIndexOf] = this.curUser;
    (localStorage["curUser"]) =JSON.stringify(this.curUser);
    localStorage['localStudents'] =JSON.stringify(this.allUsers);
    alert("Withdraw Successful");
  }
  }

}
