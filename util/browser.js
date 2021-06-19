const { firefox } = require('playwright');

module.exports = async () => {
  const browser = await firefox.launch({headless: false})
  const context = await browser.newContext({ locale: 'ko-kR' })
  const page = await context.newPage()
  await page.goto('https://hcs.eduro.go.kr/#/loginHome')
  await page.click('#btnConfirm2')
  return { browser, page }
}