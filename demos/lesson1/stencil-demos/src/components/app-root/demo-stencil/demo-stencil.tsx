import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'demo-stencil',
})
export class DemoStencil {

  @Prop() name: string;

  render() {
    return (
      <p>
        Hello {this.name}
      </p>
    );
  }
}