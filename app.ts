import util from "./util/index"
import students from "./students.json"

const diagnosis = async () => {
  try {
    students.map(async (info) => {
      const { browser, page } = await util.createBrowser()
      await util.selectSchool(page, info.school)
      await util.putSutdentInfo(page, info.student)
      await util.diagnosis(page, ["1", "1", "1", "1"]) // 1 = no; 2 = yes
      await browser.close()
      console.log(info.student.name, " Done!")
    })
  } catch (e) {
    console.log(e)
  }
}

diagnosis()
// setInterval(diagnosis, 1000 * 60 * 5) // this is for loop

process.on("uncaughtException", (e) => console.log(e))
