import AssetLink from './asset-link'
import CustomElement from './custom-element'

export default class AssetItem extends CustomElement(HTMLLIElement) {
    static tagName = 'asset-item'
    static tagType = 'li'

    link = this.getCustomElement(AssetLink)

    highlight(highlightedGraphemes) {
        this.link.highlight(highlightedGraphemes)

        const filtered = highlightedGraphemes === '' || this.link.highlighted

        this.ariaHidden = filtered ? null : true
        this.classList.toggle('asset-item--filtered', !filtered)
    }

    get highlighted() {
        return this.link.highlighted
    }

    focus() {
        this.link.focus()
    }
}
