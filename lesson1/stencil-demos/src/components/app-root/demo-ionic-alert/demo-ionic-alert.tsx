import { Component, ComponentInterface, Host, h} from '@stencil/core';
import { alertController } from '@ionic/core';

@Component({
  tag: 'demo-ionic-alert',
})
export class DemoIonicAlert implements ComponentInterface {

  async openAlert() {
    const alert: HTMLIonAlertElement = await alertController.create({
      header: `Hello CitiBank`,
      buttons: [{
        text: 'Ok',
        role: 'select',
        handler:()=>{
          debugger
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {}
      }]
    });

    await alert.present();
  }

  render() {
    return (
      <Host>
        <ion-button onClick={() => this.openAlert()}>Open Alert</ion-button>
      </Host>
    );
  }
}