import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabBarElement: any;
  splash = true;


  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.transition = 'bottom 0.4s 4s';
    this.tabBarElement.style.bottom = '-65px';

    setTimeout(() => {
      this.splash = false;
    }, 5000);

  }


}
