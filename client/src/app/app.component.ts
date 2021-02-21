import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private accountServie: AccountService){}

  ngOnInit(): void {
    this.setCurrentUser();
  }
 
  setCurrentUser(){
    var user = JSON.parse(localStorage.getItem('user'));
    this.accountServie.setCurrentUser(user);
  }
}
