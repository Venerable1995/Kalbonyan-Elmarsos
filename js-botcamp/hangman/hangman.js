class Hangman {
constructor(word,numGuess){
this.Status='playing'    
this.word=word.toLowerCase().split('')
this.numGuess = numGuess
this.guessLetters=[]
}
calcStatus(){
    let finished = true
    finished = this.word.every((letter)=> this.guessLetters.includes(letter) || letter === ' '  ? finished=true :finished=false)
        
    if (this.numGuess===0){
        this.Status='failed'
    }else if(finished){
        this.Status='finished'
    }else{
        this.Status='playing'
    }    
        
    
if(this.numGuess===0){
    this.Status='failed'

}

}
get statusMessage(){
    if(this.Status==='playing')
    {return `Guesses Left: ${this.numGuess}`}
    else if (this.Status ==='failed'){
        return `NiceTry! the word was ${this.word.join('')}`
        }
        else {
            return 'Great Work! you guessed the word.'
        }
    };

get puzzle() {   
    let puzzle =''
    this.word.forEach((item)=>{
        this.guessLetters.includes(item) || item ===' ' ? puzzle+=item : puzzle+='*'
    })
    return puzzle
    } 
 

    makeGuess(guess){
        guess=guess.toLowerCase()
        const isUnique= !this.guessLetters.includes(guess)
        const isBadGuess=!this.word.includes(guess)
       if(this.Status !=='playing'){
           return
       }
        if(isUnique ){
    
            this.guessLetters.push(guess)
    
        }
        if(isUnique &&isBadGuess){
            this.numGuess--
        }
        this.calcStatus()
    }
}







