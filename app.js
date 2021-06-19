const diagnosisUtil = require('./util');


(async () => {
    const { browser, page } = await diagnosisUtil.browser()
    await diagnosisUtil.selectSchool(page, {
        city: '',
        level: '',
        name: ''
    })
    await diagnosisUtil.inputStudentInfo(page, {
        name: '',
        birth: '',
        pw: ''
    })
    await diagnosisUtil.diagnosis(page)
    await browser.close()
})();