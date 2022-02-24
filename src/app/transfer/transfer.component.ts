import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public currentUser:any = '';
  public allUsers: any ='';
  public amount: number = 0;
  public bfAccount_no: string = '';
  public bfIndex: number = 0;
  public reason: string ='';
  public password: string ='';
  public receiver:any ='';
  public editedCustomer:any =''; 
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage["currentUser"])
    console.log(this.currentUser);
    this.allUsers = JSON.parse(localStorage["localStudents"]) 
  }
  transfer() {
    this.receiver=(this.allUsers.find((val:any, i:number)=>val.account_no==this.bfAccount_no));
    console.log(this.receiver);
    let { amount, password, receiver, } = this;
    if (amount>this.currentUser.account_bal) {
      alert("Insufficient Fund");
    }
    else if (!receiver) {
      alert("Account does not exist");
    }
    else if (this.currentUser.password!=password) {
      alert("Incorrect Password");
    }  
    else {
      this.currentUser.account_bal = this.currentUser.account_bal-this.amount
      this.receiver.account_bal = this.receiver.account_bal+this.amount;
      (localStorage["currentUser"]) =JSON.stringify(this.currentUser)
      
      console.log(this.currentUser.account_bal);
      alert("Transfer was successful");
    }
  }

}
