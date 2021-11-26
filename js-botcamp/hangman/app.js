const puzzleEl=document.querySelector('#puzzle')
const guessesEl= document.querySelector('#guesses')

const hangman1 = new Hangman('cat dog',3)
puzzleEl.textContent=hangman1.puzzle
guessesEl.textContent=hangman1.statusMessage


window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    puzzleEl.textContent=hangman1.puzzle
    guessesEl.textContent=hangman1.statusMessage
    
})