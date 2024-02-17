const player = new Player()
const deck = new Deck()
class Game {
  constructor() {
    this.currentChoice = null
  }

  takeDecision(card) {
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowLeft") {
        console.log("Left key pressed");
        this.currentChoice = "swipeLeft"
        player.impactCharacteristics(this.currentChoice, card)

      } else if (event.key == "ArrowRight") {
        console.log("Right key pressed");
        this.currentChoice = "swipeRight"
        player.impactCharacteristics(this.currentChoice, card)
      }
    });
  }
  
}
