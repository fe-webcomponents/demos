const template = document.createElement('template')
template.innerHTML = `
<style>
  .wrapper {
    border: 1px solid red;
  }
  .main {
    height: 100px;
    background: red;
  }
</style>
<div class="wrapper">
  <header>
    <slot name="head"></slot>
  </header>
  <main class="main">
    <slot name="middle"></slot>
  </main>
  <footer>
    <slot name="bottom"></slot>
  </footer>
</div>
`
class MyCom extends HTMLElement {
  constructor() {
    super()

    console.log(this.getAttribute('class'))
    console.log(this.getAttribute('cusAttr'))

    const sd = this.attachShadow({ mode: 'open' })
    sd.appendChild(template.content)
  }
}

customElements.define('my-com', MyCom)

// const myComEl = document.querySelector('.wrapper')
// console.log(myComEl.shadowRoot)
// const myColElChildren = myComEl.shadowRoot.children;
// [...myColElChildren].forEach(el => (el.style = 'font-size: 40px;'))