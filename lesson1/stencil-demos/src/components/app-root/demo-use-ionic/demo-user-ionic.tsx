import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'demo-use-ionic',
})
export class DemoUseIonic {
    render() {
        return (
          <Host>
             <ion-button>Open Alert</ion-button>
          </Host>
        );
      }
}
