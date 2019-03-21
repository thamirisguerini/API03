import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  num1:string;
  num2:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCrtl: AlertController) {
  }

  somar(){
    let resultado = parseInt(this.num1) + parseInt(this.num2);
    this.mostrarAlerta(resultado.toString());
  }

  mostrarAlerta(valor: string){
    let alert = this.alertCrtl.create({
      title: 'Resultado',
      subTitle: `O resultado da operação é: ${valor}`,
      buttons:['ok']
     });
     alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  

}
