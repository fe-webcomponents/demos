import html from './template.html'
import css from './skin.less'

class MyCounter extends HTMLElement {
    count = 0
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = document.createElement('template')
        template.innerHTML = html

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById('inc').onclick = () => this.inc();
        this.shadowRoot.getElementById('dec').onclick = () => this.dec();
        this.update(this.count);
    }

    inc() {
        this.update(++this.count);
    }

    dec() {
        this.update(--this.count);
    }

    update(count) {
        this.shadowRoot.getElementById('count').innerHTML = count;
    }
}

customElements.define('my-counter', MyCounter);