import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  public walletName:any = ""
  public targetAmount:any = ""
  public allusers:any = ""
  public currentUser:any = ""
  public wallet: any =""
  public found: any =""
  public currentUserIndexOf: any =""
  public amount: any =""
  public withdrawAmount: any =""
  public delete: any =""
  constructor() { }

  ngOnInit(): void {
    this.allusers = JSON.parse(localStorage['localStudents']);
    console.log(this.allusers);
    this.currentUser = JSON.parse(localStorage['curUser']);
    console.log(this.currentUser);
    this.wallet = this.currentUser.wallet;
    this.found = this.allusers.find((val: any)=>this.currentUser.username == val.username);
    this.currentUserIndexOf = this.allusers.indexOf(this.found)
    console.log(this.currentUserIndexOf);
  }

  createWallet(){
    this.currentUser.wallet.push({
      walletName: this.walletName,
      targetAmount: this.targetAmount,
      walletAmount: ""
    });
    console.log(this.currentUser);
    this.wallet = this.currentUser.wallet;
    localStorage['curUser'] = JSON.stringify(this.currentUser);
    this.allusers[this.currentUserIndexOf] = this.currentUser;
    console.log(this.allusers);
    
    localStorage['localStudents'] = JSON.stringify(this.allusers)
    
    
  }
  deleteWallet(i:number){
    this.delete =window.confirm("Are you sure you want to delete this wallet?");
    if (this.delete) {
      this.currentUser.wallet = this.wallet.filter((val:any, index:any)=>index !=i);
      console.log(this.currentUser);
      this.wallet= this.currentUser.wallet
      localStorage['curUser'] = JSON.stringify(this.currentUser);
      this.allusers[this.currentUserIndexOf] = this.currentUser;
      console.log(this.allusers);
      
      localStorage['localStudents'] = JSON.stringify(this.allusers);
    }
    

  }
}
