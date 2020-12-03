import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { from } from 'rxjs';
import { User } from './User';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public static instance:AppComponent;

  title = 'app-v5';
  
  nom : string = User.getInstance().getNom();
  estConn : boolean = User.getInstance().estCo();

  constructor(private router: Router, private cookieService: CookieService) { User.Update(cookieService.get('Username'), cookieService.check('Username'))} //AppComponent.UpdateUser(this.nom, this.estConn)
  

  public estCo():boolean { return User.getInstance().estCo(); }

  // public static updateName(newName:string):void { User.getInstance().updateNom(newName); }

  // public static getName():string { return User.getInstance().getNom(); }

  public static changeCoStat():void {  }

  public static changeCoParams(nom:string, estConn:boolean):void {User.Update(nom, estConn);  }
  
  public changeCo():void {
      // if (this.estConn)
      //   this.cookieService.deleteAll();
      AppComponent.changeCoParams(this.nom,this.estConn);
      this.estConn = ! this.estConn;
    }


  public gotoLink(link:string){
    this.router.navigate([link]);
  }

}
