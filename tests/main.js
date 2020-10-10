const path = require('path')
const puppeteer = require('puppeteer')
const { getActiveElementText, getExpectedList, getResultList } = require('./helper')

let browser = undefined
let page = undefined

describe('ngx-superbindex', () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            args: ['--allow-file-access-from-files']
        })

        page = await browser.newPage()
    })

    beforeEach(async () => {
        const fixture = path.join(__dirname, 'fixture.xml')
        await page.goto(`file://${fixture}`)
    })

    describe('search as you type', () => {
        it('p, h, escape', async () => {
            await page.keyboard.press('p');
            const expectedListA = getExpectedList()
            const resultListA = await getResultList(page)
            expectedListA[0].highlighted = true
            expectedListA[5].highlighted = true
            expect(resultListA).withContext('after pressing p').toEqual(expectedListA)

            await page.keyboard.press('h');
            const expectedListB = getExpectedList()
            const resultListB = await getResultList(page)
            expectedListB[0].highlighted = true
            expect(resultListB).withContext('after pressing h').toEqual(expectedListB)

            await page.keyboard.press('Escape');
            const expectedListC = getExpectedList()
            const resultListC = await getResultList(page)
            expect(resultListC).withContext('after pressing escape').toEqual(expectedListC)
        })

        it('s, e, d, x', async () => {
            await page.keyboard.type('sed');
            const expectedListA = getExpectedList()
            const resultListA = await getResultList(page)
            expectedListA[3].highlighted = true
            expect(resultListA).withContext('after typing sed').toEqual(expectedListA)

            await page.keyboard.press('x');
            const expectedListB = getExpectedList()
            const resultListB = await getResultList(page)
            expect(resultListB).withContext('after pressing x').toEqual(expectedListB)
        })
    })

    describe('tab focus', () => {
        it('p, e, escape', async () => {
            const expectedList = getExpectedList()

            await page.keyboard.press('p');
            const activeElementTextA = await getActiveElementText(page)
            expect(activeElementTextA).withContext('after pressing p').toBe(expectedList[0].name)

            await page.keyboard.press('e');
            const activeElementTextB = await getActiveElementText(page)
            expect(activeElementTextB).withContext('after pressing e').toBe(expectedList[5].name)

            await page.keyboard.press('Escape');
            const activeElementTextC = await getActiveElementText(page)
            expect(activeElementTextC).withContext('after pressing escape').toBe(expectedList[5].name)
        })

        it('s, e, d, x', async () => {
            const expectedList = getExpectedList()

            await page.keyboard.type('sed');
            const activeElementTextA = await getActiveElementText(page)
            expect(activeElementTextA).withContext('after typing sed').toBe(expectedList[3].name)

            await page.keyboard.press('x');
            const activeElementTextB = await getActiveElementText(page)
            expect(activeElementTextB).withContext('after pressing x').toBe(expectedList[3].name)
        })
    })

    afterAll(async () => {
        await browser.close()
    })
})
