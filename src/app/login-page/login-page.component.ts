import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css' 
})
export class LoginPageComponent  {
  formData={
    email: '',
    password:''
  };

  isFormSubmitted: boolean = false
  loginForm : FormGroup;
  constructor(private router:Router, private http: HttpClient, private toastr: ToastrService){
    this.loginForm=new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    })
  }

  Login(){
    const isFormValid = this.loginForm.valid;
    console.log(!isFormValid)
    this.isFormSubmitted = !isFormValid;
    console.log("Login Form Submited");
    if(isFormValid)
      { 
        //this.router.navigate(["/home"])//remove
        this.post();//uncomment
      }

  }
  Register(){
    console.log("Call Register");
    this.router.navigate(["/signUp"])
  }

  public post(){
    this.http.post('http://localhost:8000/user/check',this.loginForm.value).subscribe((data)=>{
      this.router.navigate(["/home"])
      this.toastr.success("Successfully Login!")
    }
    ,(error)=>{
      if(error.status==401){
        this.toastr.error("Incorrect Password");
      }
      else if(error.status==404){
        this.toastr.error("User not found")
      }
      else{
        this.toastr.error("Internal server error please try again latter")
      }
    });
  }
}
