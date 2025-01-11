import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})



export class SignUpPageComponent  {
  formData={
    FirstName: '',
    LastName: '',
    email: '',
    password:''
  };

  signUpForm: FormGroup; 
   constructor(private router:Router,private http:HttpClient){
    this.signUpForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl("")
    });
   }

  onSubmit(){
    console.log("form data",this.formData);
    this.post();
    this.router.navigate(["\login"]);
  }
  public post(){
    this.http.post('http://localhost:8000/addUser',this.formData).subscribe((data)=>{
      console.log(data);
    });
  }
}
