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
    // 获取自定义组件的属性
    console.log(this.getAttribute('class'))
    console.log(this.getAttribute('cusAttr'))
    // 使用 attachShadow 与外面样式进行隔离
    const sd = this.attachShadow({ mode: 'open' })
    sd.appendChild(template.content)
  }
}

customElements.define('my-com', MyCom)

const myComEl = document.querySelector('.my_com')
// 当 attachShadow 的 mode 为 open 时，可以获取 shadowRoot 的内容并且操作。
// 如果 mode 为 closed 则无法获取该节点信息
console.log(myComEl.shadowRoot)
const myColElChildren = myComEl.shadowRoot.children;

[...myColElChildren].forEach(el => (el.style = 'font-size: 40px;'))