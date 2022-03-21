import { Component, State, h, Host } from '@stencil/core';

@Component({
    styleUrl: 'skin.css',
    tag: 'demo-data-binding',
    // shadow: true,
})
export class DemoDataBinding {
    @State()
    value: string = 'aaa';

    setValue(e) {
        this.value = e.target.value
    }

    render() {
        return (
            <Host>
                <input type='text' value={this.value} onChange={e => {
                    this.setValue(e)
                }} />

                <button onClick={() => {
                    this.value = Math.random() + ''
                }}>{this.value}</button>
            </Host>
        );
    }
}
