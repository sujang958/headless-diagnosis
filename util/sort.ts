export default {
    sortSchoolLevel(school: string): string {
        if (school.includes('초등')) 
            return '2'
        else if (school.includes('중')) 
            return '3'
        else if (school.includes('고등')) 
            return '4'
        else if (school.includes('특수')) 
            return '5'
        else if (school.includes('유치')) 
            return '1'
        else
            throw new Error('school not found')
    },
    sortCity(city: string): string {
        if (city.includes('서울'))
            return '01'
        else if (city.includes('부산'))
            return '02'
        else if (city.includes('대구'))
            return '03'
        else if (city.includes('인천'))
            return '04'
        else if (city.includes('광주'))
            return '05'
        else if (city.includes('대전'))
            return '06'
        else if (city.includes('울산'))
            return '07'
        else if (city.includes('세종'))
            return '08'
        else if (city.includes('경기'))
            return '08'
        else if (city.includes('강원'))
            return '11'
        else if (city.includes('충청북'))
            return '12'
        else if (city.includes('충청남'))
            return '13'
        else if (city.includes('전라북'))
            return '14'
        else if (city.includes('전라남'))
            return '15'
        else if (city.includes('경상북'))
            return '16'
        else if (city.includes('경상남'))
            return '17'
        else if (city.includes('재주') || city.includes('제주'))
            return '18'
        else
            throw new Error('City not found')
    },
}