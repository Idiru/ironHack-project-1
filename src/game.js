const player = new Player()
const deck = new Deck()
const answera = document.getElementsByClassName("answer-1")


class Game {
  constructor() {
    this.currentChoice = null
  }

  takeDecision() { // Allow the user to take a decision and to impact the player's characteristics 
    document.addEventListener("click", (event) => {
      if (event.target.id === "first" || event.target.classList.contains("answer-1") ){
        console.log("Answer 1")
        this.currentChoice = "swipeLeft" //We return the related choice
        player.impactCharacteristics(this.currentChoice, deck.currentCard) //We impact the player's characteristics based on the choice
        deck.selectCard(this.currentChoice) //We change the selected card
      }
      else if (event.target.id === "second" || event.target.classList.contains("answer-2")){
        console.log("Answer 2")
        this.currentChoice = "swipeRight"
        player.impactCharacteristics(this.currentChoice, deck.currentCard)
        deck.selectCard(this.currentChoice)
      }
    });
  }
  
}