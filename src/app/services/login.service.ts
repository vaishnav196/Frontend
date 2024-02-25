import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private islogged:boolean=false;
  private url="http://localhost:8080/auth/login"

  constructor(private http:HttpClient) { }

  login(credentials:any): Observable<any>{
      this.islogged=true;
    return this.http.post(`${this.url}`,credentials);
  }


  saveToken(jwtToken:string):void{
    localStorage.setItem('token',jwtToken);
  }

  getToken():string |null{
    return localStorage.getItem('token');

  }
  logout(){
   localStorage.removeItem('token');
   localStorage.removeItem('cartId');
   localStorage.removeItem('userId');
 
   return this.islogged=false;
  }

isLoggedIn():boolean{
  return this.islogged;
  
}


}
