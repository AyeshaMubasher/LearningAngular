import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
   constructor(private router:Router,private http:HttpClient){}

  onSubmit(){
    console.log("Form submited!!");
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
