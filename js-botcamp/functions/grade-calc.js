// students score , total possible score
// 15/20  you got a c (75%)
// A 90-100 , B 80 - 89  C 70 - 79 , D 60-69 , F 0 -56
let gradeCalc = function (score,total){

    let percent = (score / total ) * 100
    let letterGrade =''
    if (percent >=90)
    {
        letterGrade ='A'
       
    }
    else if (percent >= 80 )
    {
        
        letterGrade ='B'
    }
    else if ( percent >=70)
    {
        
        letterGrade ='C'
    }
    else if ( percent >=60)
    {
        
        letterGrade ='D'
    }
    else {
    
       
       letterGrade ='F'
    
    }
    return `You got a ${ letterGrade } (${percent}%) `
}
let result = gradeCalc(15,20)
console.log(result)