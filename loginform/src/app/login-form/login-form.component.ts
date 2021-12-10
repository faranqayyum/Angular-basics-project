import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { loginModel } from './login.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formValue !: FormGroup;
  loginModelObj :  loginModel = new loginModel();
  logindata !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private router:Router) { }

 
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  } 

  postDashboardDetails(){
    this.loginModelObj.email = this.formValue.value.email;
    this.loginModelObj.password = this.formValue.value.password ;

    this.api.postdashboard(this.loginModelObj)
    .subscribe(res=>{
      console.log(res);  
      alert("Login Successfully")
    },
      err=>{
      alert("Something Went Wrong");
    })  
  }
  getAllEmployee(){
    this.api.getdashboard()
    .subscribe(res=>{
      this.logindata = res;
       

    })
  }

  dashboardon(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  } 
}
