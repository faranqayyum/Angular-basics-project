import { HttpClient } from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  logout(): void {
    this.http.post('/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
  }

}