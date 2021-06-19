const { firefox } = require('playwright');

module.exports = async () => {
  const browser = await firefox.launch({headless: false})
  const context = await browser.newContext({ locale: 'ko-kR' })
  const page = await context.newPage()
  page.on('dialog', async dialog => {
    await dialog.dismiss()
    const msg = dialog.message()
    throw new Error(msg)
  })
  await page.goto('https://hcs.eduro.go.kr/#/loginHome')
  await page.click('#btnConfirm2')
  return { browser, page }
}