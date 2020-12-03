import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component'
import { User } from 'src/app/User';
import { CookieService } from 'ngx-cookie-service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) {}

  public username = "";
  public password = "";
  public email = "";

  public onClickAction(link:string)
  {
    if((this.username != "")&&(this.password != "")&&(this.email!="")){
      //this.username = newname;
      // AppComponent.updateName(this.username);
      // AppComponent.changeCoStat();
      User.getInstance().updateNom(this.username);
      User.getInstance().changeCo();
      this.cookieService.set('Username', this.username);
      this.cookieService.set('Password', this.password);
      this.cookieService.set(this.username, 'Username');
      this.cookieService.set(this.password, 'Password');
      this.gotoLink(link);
    }
    else{
      //DO AN ERROR MESSAGE HERE
    }
  }
  public gotoLink(link:string){
    this.router.navigate([link]);
  }
  ngOnInit(): void {
  }

}
