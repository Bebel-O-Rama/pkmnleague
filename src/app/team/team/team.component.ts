import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  ngOnInit(): void {
  }

  validCred:boolean = true; 
  constructor(private router: Router, private cookieService: CookieService) {}

  public username = "";
  public password = "";

  public onClickAction(link:string){
    this.validCred = this.cookieService.check(this.username) && this.cookieService.check(this.password);

 //if((this.username != "")&&(this.password != "")&&(this.email!="")){   //DEBUG, SKIPS AUTH
  if(this.validCred){   //IMPLEMENTATION, CHECK FOR USER EXISTENCE 
      User.getInstance().updateNom(this.username);
      User.getInstance().changeCo();
      this.gotoLink(link);
    }
    //else{
      //géré en html
    //}
  }

  public gotoLink(link:string){
    this.router.navigate([link]);
  }

}
