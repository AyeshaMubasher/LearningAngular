import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})



export class SignUpPageComponent  {

  submit(){
    console.log("Form submited!!");
  }
}
