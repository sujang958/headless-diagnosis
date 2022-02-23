import { Page } from "playwright"

interface Student {
  name: string
  birth: string
  pw: string
}

var window: any = {}

const putSutdentInfo = async (page: Page, student: Student) => {
  await page.fill("#user_name_input", student.name)
  await page.fill("#birthday_input", student.birth)
  await page.click("#btnConfirm")
  await page.waitForTimeout(1000)
  console.log("asdf")
  await page.click("#WriteInfoForm > table > tbody > tr > td > div > button")
  await page.waitForTimeout(200)
  for (const part of student.pw) await page.click(`a[aria-label="${part}"]`)
  await page.click("#btnConfirm")
  await page.waitForLoadState()
}

export default putSutdentInfo
