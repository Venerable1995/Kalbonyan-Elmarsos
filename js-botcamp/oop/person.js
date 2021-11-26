// prototye1 inheritance
class Person{
constructor(firstName ,lastName ,age ,likes=[]){
    this.firstName =firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
getBio(){
    let bio=`${this.firstName} is ${this.age}`
    this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}`
    })
    return bio
}
get fullName(){
    return `${this.firstName} ${this.lastName}`
}
set fullName(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
    }
}

class Employee extends Person{
constructor(firstName, lastName ,age ,position, likes=[]){
    super(firstName ,lastName,age,likes)
    this.position = position
}
getBio(){

    return `${this.fullName} is a ${this.position}.`
}
getYearsLefT(){
    return 65 - this.age
}
}


const me = new Employee('Mohamed','Saeed',26,'SoftWare Engineer',['programming','gaming'])
console.log(me.getBio())
console.log(me.getYearsLefT())
const person2= new Person('Clancey','Turner',51)

console.log(person2.getBio())
class students{
    constructor(name,grade){
        this.name=name
        this.grade=grade
        
    }
    trackGrade(){
        let status=''
        if(this.grade<70){
            status ='Failling'
        }else if(this.grade>69){ status='Passing'}
        return `${this.name} is ${status} the test.`
    }
    updateGrade(grade){
        return this.grade=grade
    }
}
const student1= new Employee('Mohamed','Saeed',26 ,'Teacher',[])
me.fullName='Clancey Turner'

