import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  {
  public tooken: any;
  
  public FirstName: any;
  public LastName: any;
  constructor(private router:Router,private http:HttpClient, private cookie:CookieService){}
  signOut(){
    this.cookie.delete("token")
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void{
    this.getUserData();
  }

  

  public getUserData(){
    if(this.cookie.check("token")){
    this.tooken=this.cookie.get("token")
    console.log("tooken from home ",this.tooken)
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${this.tooken}`
    })
    this.http.get("http://localhost:8000/user/getUser",{headers}).subscribe((res: any)=>{
      console.log(res)
      this.FirstName=res.FirstName;
      this.LastName=res.LastName;
    })
    }
    else{
      this.router.navigate(["/login"]);
    }
  }
}
