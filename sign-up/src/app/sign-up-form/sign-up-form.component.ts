import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { SignInData } from '../model/signinData';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor ( private authenticationsService: AuthenticationService,
               ) { }

  
  ngOnInit(): void {

    }
  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationsService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}
