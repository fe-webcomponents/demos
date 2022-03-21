import { Component, Event,Listen, EventEmitter, h, Method } from '@stencil/core';

@Component({
    tag: 'demo-event',
})
export class DemoEvent {
    @Event({
        eventName: 'loaded',
        composed: true,
        cancelable: true,
        bubbles: true,
    }) loadedEvent: EventEmitter;

    emitLoaded() {
        const event = this.loadedEvent.emit({type:'loaded'});
        if (!event.defaultPrevented) {
            // if not prevented, do some default handling code
        }
    }

    @Listen('loaded')
    todoCompletedHandler(event) {
     //debugger
    }

    @Method()
    alert(params){
        debugger
    }

    render() {
        return (
            <div>
                <MyBtn click={()=>this.emitLoaded()}/>
            </div>
        );
    }
}

function MyBtn(props){
    return (
        <button onClick={props.click}>Emit Loading</button>
    )
}
