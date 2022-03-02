import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currentUser:any = '';
  public transfer: any ='';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage["curUser"]);
    console.log(this.currentUser);
    this.transfer = this.currentUser.transfer;
  }
  logout(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['/'])
  }
}
