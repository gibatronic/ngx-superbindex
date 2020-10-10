import CustomElement from './custom-element'

export default class AssetList extends CustomElement(HTMLOListElement) {
    static tagName = 'asset-list'
    static tagType = 'ol'

    highlightedGraphemes = ''
    keystroke = this.keystroke.bind(this)

    highlight(key) {
        if (key === '') {
            this.highlightedGraphemes = ''
        } else {
            this.highlightedGraphemes += key.toLocaleLowerCase()
        }

        let firstHighlightedAssetItem

        for (const assetItem of this.children) {
            assetItem.highlight(this.highlightedGraphemes)

            if (firstHighlightedAssetItem === undefined && assetItem.highlighted) {
                firstHighlightedAssetItem = assetItem
            }
        }

        if (firstHighlightedAssetItem === undefined) {
            if (this.highlightedGraphemes !== '') {
                this.highlight('')
            }

            return
        }

        firstHighlightedAssetItem.focus()
        firstHighlightedAssetItem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    }

    mount() {
        document.body.addEventListener('keyup', this.keystroke)
    }

    keystroke({ key }) {
        if (key === 'Escape') {
            this.highlight('')

            return
        }

        const notGrapheme = key.length !== 1;

        if (notGrapheme) {
            return
        }

        this.highlight(key)
    }
}
