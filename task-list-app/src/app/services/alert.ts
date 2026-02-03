import {inject, Injectable} from '@angular/core';
import {AlertController} from "@ionic/angular/standalone"

@Injectable({
  providedIn: 'root',
})
export class Alert {
  private alertController: AlertController= inject(
    AlertController
  );
  async alertMessage(
    header: string,
    message: string,
  ) {
    const alert = await this.alertController.create({
      header ,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
