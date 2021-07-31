import { Browser, BrowserContext, chromium, Dialog, Page } from "playwright"

interface returnObject {
    browser: Browser
    page: Page
}

const createBrowser = async (): Promise<returnObject> => {
    const browser: Browser = await chromium.launch()
    const context: BrowserContext = await browser.newContext({ locale: 'ko-kR', userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36' })
    const page: Page = await context.newPage()

    page.on('dialog', async (dialog: Dialog) => {
        await dialog.dismiss()
        const msg: string = dialog.message()
        console.log(msg)
        throw new Error(msg)
    })

    await page.goto('https://hcs.eduro.go.kr/#/loginHome')
    await page.click('#btnConfirm2')
    return { browser, page }
}

export default createBrowser