import { Page } from "playwright"

const diagnosis = async (page: Page, survey: string[]) => {
  await page.waitForURL("https://hcs.eduro.go.kr/#/main", {
    waitUntil: "domcontentloaded",
  })
  await page.click(
    ".memberWrap > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)"
  )
  await page.waitForSelector("#survey_q3a1")
  for (const i in survey)
    await page.click(`#survey_q${Number(i) + 1}a${survey[i]}`)
  await page.click("#btnConfirm")
  await page.waitForSelector(".guide_center > p:nth-child(2)")
  await page.screenshot({ path: "diagnosis.jpg" })
}

export default diagnosis
