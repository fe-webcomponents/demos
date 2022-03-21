import { Component, h } from '@stencil/core';

import './demo-stencil/demo-stencil'
import './demo-state/demo-state'
import './demo-event/demo-event'

// import './demo-data-binding/demo-data-binding'

import './demo-use-ionic/demo-user-ionic'

import './demo-ionic-alert/demo-ionic-alert'


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  // test(){
  //   const eventCom = document.querySelector('demo-event')
  //   eventCom.alert()
  // }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil Demos</h1>
        </header>

        <main>
          {/* <demo-state/> */}
          {/* <demo-event 
          // onLoaded={(obj)=>{
          //   console.log('Loaded.',obj)
          // }}
          /> */}
          {/* <demo-stencil name='CitiBank'/> */}
          {/* <demo-ionic-alert/> */}
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
