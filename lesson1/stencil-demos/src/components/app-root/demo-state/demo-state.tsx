import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'demo-state',
})
export class DemoState {
    timer: number;

    // `currentTime` is decorated with `@State()`,
    // as we need to trigger a rerender when its
    // value changes to show the latest time
    @State() currentTime: number = Date.now();

    connectedCallback() {
        // this.timer = window.setInterval(() => {
        //     // the assignment to `this.currentTime`
        //     // will trigger a re-render
        //     this.currentTime = Date.now();
        // }, 1000);
    }

    disconnectedCallback() {
        //window.clearInterval(this.timer);
    }

    render() {
        const time = new Date(this.currentTime).toLocaleTimeString();
        const someId = 'abc'
        const ary:{id,name}[] = new Array(10)

        for(let i=0;i<10;i++){
            ary.push({id:i,name:i})
        }

        return (
            <div>
                <span id={someId}>{time}</span>
                {
                    ary.map(obj=>{
                        return (
                            <button onClick={() => {
                                this.currentTime = Date.now();
                            }}>{obj.name}</button>
                        )
                    })
                }
               
            </div>
        );
    }
}
