import { Page } from "playwright"
import sort from "./sort"
interface School {
    city: string
    level: string
    name: string
}

const selectSchool = async (page: Page, school: School) => {
    await page.click('.searchBtn')
    await page.waitForTimeout(100)
    await page.selectOption('#sidolabel', { value: sort.sortCity(school.city) })
    await page.selectOption('#crseScCode', { value: sort.sortSchoolLevel(school.level) })
    await page.fill('#orgname', school.name)
    await page.click('button.searchBtn:nth-child(1)')
    await page.waitForSelector('.layerSchoolArea > li:nth-child(1) > a:nth-child(1) > p:nth-child(2) > a:nth-child(1)')
    await page.click('.layerSchoolArea > li:nth-child(1) > a:nth-child(1) > p:nth-child(2) > a:nth-child(1)')
    await page.click('.layerFullBtn')
    await page.waitForTimeout(200)
}

export default selectSchool