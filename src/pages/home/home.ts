import { PrincipalPage } from './../principal/principal';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

   openPrincipal(){
     this.navCtrl.push(PrincipalPage);
  }

  /*openPrincipal(){
    this.navCtrl.setRoot(PrincipalPage);
  }*/

}
