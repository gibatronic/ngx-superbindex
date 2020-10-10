exports.getActiveElementText = (page) => {
    return page.evaluate(() => {
        return document.activeElement.textContent
    })
}

exports.getExpectedList = () => {
    return [{
        // 0
        highlighted: false,
        name: 'phasellus',
        type: 'directory'
    }, {
        // 1
        highlighted: false,
        name: 'fusce',
        type: 'directory'
    }, {
        // 2
        highlighted: false,
        name: 'orci',
        type: 'directory'
    }, {
        // 3
        highlighted: false,
        name: 'sed',
        type: 'file'
    }, {
        // 4
        highlighted: false,
        name: 'etiam',
        type: 'file'
    }, {
        // 5
        highlighted: false,
        name: 'pellentesque',
        type: 'file'
    }]
}

exports.getResultList = (page) => {
    return page.evaluate(() => {
        const assetList = document.body.querySelector('[is="asset-list"]')
        const list = [ ]

        for (const assetItem of assetList.children) {
            list.push({
                highlighted: assetItem.link.highlighted,
                name: assetItem.link.textContent,
                type: assetItem.link.type
            })
        }

        return list
    })
}
