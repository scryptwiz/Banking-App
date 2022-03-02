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
  public editedReceiverIndexOf :any =''; 
  public editedSenderIndexOf :any =''; 
  public curUser: any = ''
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage["curUser"])
    this.curUser = JSON.parse(localStorage['curUser'])
    this.allUsers = JSON.parse(localStorage["localStudents"]) 
  }
  transfer() {
    // Receiver
    this.receiver=(this.allUsers.find((val:any, i:number)=>val.account_no==this.bfAccount_no));
    console.log(this.receiver);
    this.editedReceiverIndexOf = this.allUsers.indexOf(this.receiver);
    console.log(this.allUsers);
    console.log(this.curUser);
    
    // Sender
    let found =this.allUsers.find((val:any)=>this.curUser.username==val.username)
    this.editedSenderIndexOf = this.allUsers.indexOf(found)
    console.log(this.editedSenderIndexOf);
    console.log(this.editedReceiverIndexOf);

    let { amount, password, receiver, } = this;
    if (amount>this.currentUser.account_bal) {
      alert("Insufficient Fund");
    }
    else if (!receiver) {
      alert("User does not exist");
    }
    else if (this.currentUser.password!=password) {
      alert("Incorrect Password");
    }  
    else {
      // Editing Sender
      this.currentUser.account_bal = this.curUser.account_bal-this.amount;
      this.allUsers[this.editedSenderIndexOf] = this.currentUser;
      (localStorage["curUser"]) =JSON.stringify(this.currentUser);

      // Editing Receiver
      this.receiver.account_bal = this.receiver.account_bal+this.amount;
      this.allUsers[this.editedReceiverIndexOf] = this.receiver;
      console.log(this.allUsers);

      // Transfer
      this.curUser.transfer.push({
        accountName: this.receiver.username,
        accountNumber: this.bfAccount_no,
        amount: amount,
        reason: this.reason
      });

      (localStorage["curUser"]) =JSON.stringify(this.curUser);

      // Updating the localStorage
      alert("Transfer was successful");
      localStorage["localStudents"] = JSON.stringify(this.allUsers);
    }
  }

}
