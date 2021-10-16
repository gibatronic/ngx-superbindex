import CustomElement from './custom-element'

export default class AssetLink extends CustomElement(HTMLAnchorElement) {
    static tagName = 'asset-link'
    static tagType = 'a'

    highlighted = false

    highlight(highlightedGraphemes) {
        const regExp = new RegExp(`^(${highlightedGraphemes})`, 'iu')

        this.highlighted = highlightedGraphemes !== '' && regExp.test(this.name)

        if (this.highlighted) {
            const template = '<mark class="asset-mark">$1</mark>'

            this.innerHTML = this.name.replace(regExp, template)
        } else {
            this.textContent = this.name
        }

        this.classList.toggle('asset-link--highlighted', this.highlighted)
    }

    get name() {
        return this.dataset.name
    }

    get type() {
        if (this.classList.contains('asset-link--directory')) {
            return 'directory'
        }

        if (this.classList.contains('asset-link--file')) {
            return 'file'
        }

        return ''
    }
}
