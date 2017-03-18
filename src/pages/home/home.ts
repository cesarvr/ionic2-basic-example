import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      const before = Date.now();

            document.addEventListener('deviceready', () => {
                console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');

                cordova.plugins.pdf.htmlToPDF({
                        data: "<html> <h1>  Hello World  </h1> </html>",
                        documentSize: "A4",
                        landscape: "portrait",
                        type: "base64"
                    },
                    (sucess) => console.log('sucess: ', sucess),
                    (error) => console.log('error:', error));
            });

   
  }

}
