import CustomElement from './custom-element'

export default class AssetLink extends CustomElement(HTMLAnchorElement) {
    static tagName = 'asset-link'
    static tagType = 'a'

    highlighted = false

    highlight(highlightedGraphemes) {
        const regExp = new RegExp(`^(${highlightedGraphemes})`, 'iu')

        this.highlighted = highlightedGraphemes !== '' && regExp.test(this.url)

        if (this.highlighted) {
            const template = '<mark class="asset-mark">$1</mark>'

            this.innerHTML = this.url.replace(regExp, template)
        } else {
            this.textContent = this.url
        }

        this.classList.toggle('asset-link--highlighted', this.highlighted)
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

    get url() {
        return this.getAttribute('href')
    }
}
