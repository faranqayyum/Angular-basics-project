import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { loginModel } from '../login-form/login.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formValue !: FormGroup;
  DashboardModelObj :  loginModel = new loginModel();
  logindata !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

 
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  } 

  postDashboardDetails(){
    this.DashboardModelObj.email = this.formValue.value.email;
    this.DashboardModelObj.password = this.formValue.value.password ;

    this.api.postdashboard(this.DashboardModelObj)
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
}