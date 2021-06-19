module.exports = async page => {
    await page.waitForSelector('li.active:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
    await page.click('li.active:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
    await page.waitForSelector('#survey_q1a1')
    await page.click('#survey_q1a1')
    await page.click('#survey_q2a1')
    await page.click('#survey_q3a1')
    await page.click('#btnConfirm')
    await page.waitForTimeout(300)
    await page.screenshot({path: 'diagnosis.jpg'})
}