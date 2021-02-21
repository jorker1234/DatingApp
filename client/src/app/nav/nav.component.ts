import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountServie: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountServie.login(this.model).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

  logout() {
    this.accountServie.logout();
  }
}
