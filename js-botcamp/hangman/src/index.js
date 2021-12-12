import Hangman from './hangman'
import getPuzzle from './requests'

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