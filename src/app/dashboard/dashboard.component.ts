import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public currentUser:any = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage["currentUser"])
    console.log(this.currentUser);
    
  }
  logout(){
    localStorage.removeItem('currentUser')
    this.router.navigate(['/'])
  }
}
