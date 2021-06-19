const diagnosisUtil = require('./util');
const school = require('./school.json');
const student = require('./student.json');

(async () => {
    try {
        const { browser, page } = await diagnosisUtil.browser()
        await diagnosisUtil.selectSchool(page, school)
        await diagnosisUtil.inputStudentInfo(page, student)
        await diagnosisUtil.diagnosis(page)
        await browser.close()
    } catch (e) {
        console.log(e.toString())
        process.exit()
    }
})();