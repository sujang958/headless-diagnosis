import student from "./student.json";
import school from "./school.json";
import util from "./util/index";

(async () => {
    try {
        const { browser, page } = await util.createBrowser()
        await util.selectSchool(page, school)
        await util.putSutdentInfo(page, student)
        await util.diagnosis(page)
        await browser.close()
    } catch (e) {
        console.log(e)
    }
})();