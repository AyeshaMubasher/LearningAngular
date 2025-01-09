import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router, private http: HttpClient){}

  Login(){
    console.log("Login Successfull!!")
    this.post();
  }
  Register(){
    this.router.navigate(["/signUp"])
  }
/*
  public getMethod(){
    this.http.get('http://localhost:8000/getAll').subscribe((data)=>{
      console.log(data);
    });
  }
    */
  public post(){
    this.http.post('http://localhost:8000/user/check',this.formData).subscribe((data)=>
      this.router.navigate(["/home"])
    ,(error)=>console.log("oops",error.status));
  }
}
