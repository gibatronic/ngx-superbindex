export default ParentClass => class CustomElement extends ParentClass {
    static define() {
        customElements.define(this.tagName, this, {
            extends: this.tagType
        })
    }

    connectedCallback() {
        if (this.isConnected && this.mount instanceof Function) {
            this.mount()
        }
    }

    getCustomElement(customElement) {
        return this.querySelector(`[is="${customElement.tagName}"]`)
    }
}
