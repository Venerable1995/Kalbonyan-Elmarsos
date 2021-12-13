// const myAge= 26
// const message = myAge >=  18 ? 'You  can vote!' : 'You cannot vote. '
// console.log(message)

const MyAge = 26 
const showPage= ()=>{console.log('showing the page')}
const showErrorPage=()=>{console.log('Showing the Error Page')}
MyAge >= 21 ? showPage() : showErrorPage()
const team = ['Tyler','Porter']
const teamSize = (team)=> {team.length <= 4 ? console.log('Your Team less than or equal 4') : console.log('too many players on your team')}
teamSize(team)