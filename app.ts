import students from "./students.json"
import Diagnosis from "./util/diagnosis"

const diagnosis = async () => {
  students.map(async ({ student, school }) => {
    try {
      const diagnosis = new Diagnosis(student, school)
      await diagnosis.createBrowser()
      await diagnosis.diagnose()
      console.log(new Date().toLocaleString(), student.name, " Done!")
    } catch (e) {
      console.log(new Date().toLocaleString(), student.name, e)
    }
  })
}

diagnosis()
// setInterval(diagnosis, 1000 * 60 * 5) // this is for loop

process.on("uncaughtException", (e) => console.log(e))
