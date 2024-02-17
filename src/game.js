const player = new Player()
const deck = new Deck()
class Game {
  constructor() {
    this.currentChoice = null
  }

  takeDecision() { // Allow the user to take a decision and to impact the player's characteristics 
    document.addEventListener("keydown", (event) => { //Recording of the user choice based on the arrow left or right key
      if (event.key == "ArrowLeft") { 
        console.log("Left key pressed");
        this.currentChoice = "swipeLeft" //We return the related choice
        player.impactCharacteristics(this.currentChoice, deck.currentCard) //We impact the player's characteristics based on the choice
        deck.selectCard(this.currentChoice) //We change the selected card

      } else if (event.key == "ArrowRight") {
        console.log("Right key pressed");
        this.currentChoice = "swipeRight"
        player.impactCharacteristics(this.currentChoice, deck.currentCard)
        deck.selectCard(this.currentChoice)
      }
    });
  }
  
}