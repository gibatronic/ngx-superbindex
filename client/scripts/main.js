import AssetLink from './asset-link'
import AssetItem from './asset-item'
import AssetList from './asset-list'

function main() {
    AssetLink.define()
    AssetItem.define()
    AssetList.define()
}

document.addEventListener('DOMContentLoaded', main)
