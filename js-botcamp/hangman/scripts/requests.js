const getPuzzle =async (wordCount)=> {
const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
if(response.status===200){
const data = await response.json()
return data.puzzle
}else{
    throw new Error('unable to get puzzle')
}
}

const getCountryName = async (alphaCode) =>{
    const response= await fetch('https://restcountries.com/v2/all')
        if(response.status === 200){  
            const data = await response.json()
           return data.find((country)=> country.alpha2Code === alphaCode)
        }else {throw new Error('not found')}
}
const getLocation =async()=>{
    const response = await fetch('https://ipinfo.io/json?token=f59fda23c1572c')
        if(response.status===200){
            return response.json()
        }else{
            throw new Error('not found')
        }
}
const getCurrentCountry = async()=>{
    const response = await fetch('https://ipinfo.io/json?token=f59fda23c1572c')
    if(response.status===200){
        const data = await response.json()
    const response2= await fetch('https://restcountries.com/v2/all') 
    if(response2.status === 200){  
        const data2 = await response2.json()
       return data2.find((country)=> country.alpha2Code === data.country)
    }
    }
    else {throw new Error('not found')}   
}