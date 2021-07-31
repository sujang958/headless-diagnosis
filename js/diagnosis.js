module.exports = 
/**
 * 
 * @param {import('playwright').Page} page 
 */
async page => {
    await page.waitForURL('https://hcs.eduro.go.kr/#/main', {waitUntil: 'domcontentloaded'})
    await page.click('.memberWrap > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
    await page.waitForSelector('#survey_q3a1')
    await page.click('#survey_q1a1')
    await page.click('#survey_q2a1')
    await page.click('#survey_q3a1')
    await page.click('#btnConfirm')
    await page.waitForSelector('.guide_center > p:nth-child(2)')
    await page.screenshot({path: 'diagnosis.jpg'})
}