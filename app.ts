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
setInterval(() => {
  const KoreaHours = new Date().getUTCHours() + 9
  if (KoreaHours > 24) {
    if (KoreaHours - 24 < 7) diagnosis()
  } else if (KoreaHours < 7) diagnosis()
}, 1000 * 60 * 5) // this is for loop

process.on("uncaughtException", (e) => console.log(e))
