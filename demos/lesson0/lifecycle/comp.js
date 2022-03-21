class Parent extends HTMLElement {

    static get observedAttributes() {
        // 返回需要监听的属性名称字符串数组
        return ['path'];
    }

    constructor(props) {
        super()
        console.log('----------------parent.constructor,props=', props)
    }

    connectedCallback() {
        console.log(' Parent.connectedCallback')
    }

    disconnectedCallback() {
        console.log('Parent.disconnectedCallback')
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if(prop==='path'){
            throw new Error(`The attribute path error...`)
        }
        console.log('Parent 属性发生了变化', ' prop=', prop, ' oldValue=', oldValue, ' newValue=', newValue)
    }

    adoptedCallback() {
        console.log('Parent 发生了移动')
    }
}

class Children extends HTMLElement {

    static get observedAttributes() {
        return ["path"]
    }
    constructor(props) {
        super(props)
        console.log('----------------children.constructor')
    }

    connectedCallback() {
        console.log(' Children.connectedCallback')
    }


    disconnectedCallback() {
        console.log('Children.disconnectedCallback')
    }

    adoptedCallback() {
        console.log('Children 发生了移动')
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        console.log('Children 属性发生了变化', ' prop=', prop, ' oldValue=', oldValue, ' newValue=', newValue)
    }
}

customElements.define('bfs-parent', Parent)
customElements.define('bfs-children', Children)