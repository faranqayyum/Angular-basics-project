import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';


@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

  private readonly mockedUser = new SignInData("faranqayyumiu@gmail.com" , 'user1234');
  isAuthenticated = false;
 
  constructor(private router: Router) { }

  authenticate(signInData: SignInData ):boolean{

    if (this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(['home']);
      return true;
    }
  
  this.isAuthenticated = false;
  return false;

  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean{
    return login === this.mockedUser.getLogin();

  }
 
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

}
