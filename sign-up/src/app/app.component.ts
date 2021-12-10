import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // bg: string = '../image/eventhub.png';
  title = 'sign-up';



  constructor(private router:Router){}

  clicksignup(pagename:string):void{
    this.router.navigate([`${pagename}`]); 
  }

  
}
