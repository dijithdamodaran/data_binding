import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-way-binding-demo';
  userName: string="dijith ";
  userEmail:string="dij@gmail.com";
  userAge:number=30;
  userCompany:string="it-vedant";
  imageurl:string="assets/image.jpg";
  data : string = ""
  onsave(){
    this.data = this.userName + ":" + this.userAge + ":" + this.userCompany + ":" + this.userEmail;
  }
}
 