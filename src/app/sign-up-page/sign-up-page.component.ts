import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})



export class SignUpPageComponent  {

  isFormSubmitted: boolean = false
  signUpForm: FormGroup; 
   constructor(private router:Router,private http:HttpClient){
    this.signUpForm = new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required])
    });
   }

  onSubmit(){
    const isFormValid = this.signUpForm.valid;
    console.log(!isFormValid)
    this.isFormSubmitted = !isFormValid;
    if(isFormValid)
      {
        //this.post();
        this.router.navigate(["\login"]);
      }
    //console.log("form data",this.formData);
    console.log("Values: ",this.signUpForm.value);
  }
  public post(){
    this.http.post('http://localhost:8000/addUser',this.signUpForm.value).subscribe((data)=>{
      console.log(data);
      this.router.navigate(["\login"]);
    });
  }
}
