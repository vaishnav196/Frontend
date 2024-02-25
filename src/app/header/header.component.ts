import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private loginService:LoginService){}


 isloggedIn():boolean{
  return this.loginService.isLoggedIn();
 }


logout(){

  return this.loginService.logout();  
}


}
