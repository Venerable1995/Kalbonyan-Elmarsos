const puzzleEl=document.querySelector('#puzzle')
const guessesEl= document.querySelector('#guesses')
let hangman1 = new Hangman('cat dog',3)

window.addEventListener('keypress',(e)=>{
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    render()
    
})
const render =()=>{
    puzzleEl.innerHTML=''
    guessesEl.textContent=hangman1.statusMessage
    const puzzleSplit= hangman1.puzzle.split('')
        puzzleSplit.forEach((character)=>{
          
            const puzzleChar=document.createElement('span')
            puzzleChar.textContent= character
            puzzleEl.appendChild(puzzleChar)
            
           
        })
}
const startGame = async () =>{
const puzzle = await getPuzzle('2')
hangman1= new Hangman(puzzle,5)
render()
}
document.querySelector('#reset').addEventListener('click',startGame)

startGame()
//  getPuzzle('2').then((puzzle) => { 
//     console.log(puzzle)
//      }).catch((err) =>{
//          console.log(`Error: ${err}`)
//      })
 
//  getCountryName("EG").then((country)=>{
//     console.log(country.name)   
//     }).catch((err) =>{
//         console.log(err)
//     })
// getLocation().then((location)=>{
//     return getCountryName(location.country).then((country)=>{
//         console.log(location.city,location.region,country.name )   
//         }).catch((err) =>{
//             console.log(`Error: ${err}`)
//         })
//     })
// .catch((err)=>{console.log(err)})
// getCurrentCountry().then((country)=>{
//     console.log(country.name)
// }).catch((error)=>{
//     console.log(error)
// })
    // fetch('http://puzzle.mead.io/puzzle',{}).then((response)=>{
    // if(response.status===200){
    //     return response.json()
    // }else{
    //     throw new Error ('unable to fetch the puzzle')
    // }
    // }).then((data)=>{
    //     console.log(data.puzzle)
    // }).catch((error)=>{
    // console.log(error)
    // })
 
