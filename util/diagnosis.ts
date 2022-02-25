import { Browser, BrowserContext, chromium, Dialog, Page } from "playwright"
import { Student, School } from "../typings"
import sort from "./sort"

class Diagnosis {
  public browser!: Browser
  public context!: BrowserContext
  public page!: Page

  constructor(public student: Student, public school: School) {}

  public async createBrowser() {
    this.browser = await chromium.launch({ headless: false })
    this.context = await this.browser.newContext({
      locale: "ko-kR",
    })
    this.page = await this.context.newPage()
    this.page.on("dialog", async (dialog: Dialog) => {
      await dialog.dismiss()
      const msg: string = `${new Date().toLocaleString()} ${
        this.student.name
      } ${dialog.message()}`
      console.log(msg)
      this.browser.close()
      throw new Error(msg)
    })
    await this.page.goto("https://hcs.eduro.go.kr/#/loginHome")
    await this.page.click("#btnConfirm2")
  }

  public async diagnose(survey: string = "1"): Promise<Buffer> {
    await this.setSchool()
    await this.setStudent()

    await this.page.waitForURL("https://hcs.eduro.go.kr/#/main", {
      waitUntil: "domcontentloaded",
    })
    await this.page.click(
      "#container > div > section.memberWrap > div:nth-child(2) > ul > li:nth-child(1) > a.survey-button"
    )
    await this.page.waitForSelector("#survey_q3a1")
    const surveys = await this.page.$$(".question-article")
    await Promise.all([
      ...surveys.map(
        async (_, i) =>
          await this.page.click(`#survey_q${Number(i) + 1}a${survey}`)
      ),
    ])
    await this.page.click("#btnConfirm")
    await this.page.waitForSelector(".guide_center > p:nth-child(2)")
    const screenshot = await this.page.screenshot()
    await this.browser.close()
    return screenshot
  }

  private async setStudent() {
    await this.page.fill("#user_name_input", this.student.name)
    await this.page.fill("#birthday_input", this.student.birth)
    await this.page.click("#btnConfirm")
    await this.page.waitForTimeout(500)
    if (
      !(await this.page.$(
        "#WriteInfoForm > table > tbody > tr > td > div > button"
      ))
    )
      this.setStudent()
    await this.page.click(
      "#WriteInfoForm > table > tbody > tr > td > div > button"
    )
    await this.page.waitForTimeout(200)
    for (const part of this.student.pw)
      await this.page.click(`a[aria-label="${part}"]`)
    await this.page.click("#btnConfirm")
    await this.page.waitForLoadState()
  }

  private async setSchool() {
    await this.page.click(".searchBtn")
    await this.page.waitForTimeout(100)
    await this.page.selectOption("#sidolabel", {
      value: sort.sortCity(this.school.city),
    })
    await this.page.selectOption("#crseScCode", {
      value: sort.sortSchoolLevel(this.school.level),
    })
    await this.page.fill("#orgname", this.school.name)
    await this.page.click("button.searchBtn:nth-child(1)")
    await this.page.waitForSelector(
      ".layerSchoolArea > li:nth-child(1) > a:nth-child(1) > p:nth-child(2) > a:nth-child(1)"
    )
    await this.page.click(
      ".layerSchoolArea > li:nth-child(1) > a:nth-child(1) > p:nth-child(2) > a:nth-child(1)"
    )
    await this.page.click(".layerFullBtn")
    await this.page.waitForTimeout(200)
  }
}

export default Diagnosis
