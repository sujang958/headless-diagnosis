module.exports = async (page, student) => {
    await page.fill('#user_name_input', student.name)
    await page.fill('#birthday_input', student.birth)
    await page.click('#btnConfirm')
    await page.waitForTimeout(200)
    await page.fill('.input_text_common', student.pw)
    await page.click('#btnConfirm')
    await page.waitForLoadState()
}