const player = new Player()
player.fillShape()

const deck = new Deck()
const round = document.getElementsByClassName("round")
const startScreen = document.querySelector(".container-starting-game-screen")
const mainScreen = document.querySelector(".container")
const winningScreen = document.querySelector(".container-win-game-screen")


class Game {
  constructor() {
    this.currentChoice = null
    this.round = 1
  }

  takeDecision() { // Allow the user to take a decision and to impact the player's characteristics 
    document.addEventListener("click", (event) => {
      if (event.target.id === "first" || event.target.classList.contains("answer-1") ){
        console.log("Answer 1")
        this.currentChoice = "swipeLeft" //We return the related choice
        player.impactCharacteristics(this.currentChoice, deck.currentCard) //We impact the player's characteristics based on the choice
        deck.selectCard(this.currentChoice) //We change the selected card
        this.round += 1
        round[0].innerHTML = this.round
      }
      else if (event.target.id === "second" || event.target.classList.contains("answer-2")){
        console.log("Answer 2")
        this.currentChoice = "swipeRight"
        player.impactCharacteristics(this.currentChoice, deck.currentCard)
        deck.selectCard(this.currentChoice)
        this.round += 1
        round[0].innerHTML = this.round
      }
      player.checkCharacteristics() // Check if one of the characteristics is under 0 to display the lost screen
      this.checkRounds()
    });

  }

  startGame(){
    document.addEventListener("click", (event) => {
      if(event.target.classList.contains("starting-button")){
        startScreen.style.display = "none"
        mainScreen.style.display = "flex"
      }
    });
  }

  checkRounds(){
    if(this.round === 10) {
      mainScreen.style.display = "none"
      winningScreen.style.display = "flex"
    }
  }

  fillShape(percentage) {
    const maxHeight = 30; // Hauteur totale de la forme SVG
    const fillElement = document.getElementById('fillShape');
    const fillHeight = (maxHeight * percentage) / 100;
    fillElement.setAttribute('height', fillHeight);
    // Ajuster la position y pour remplir de bas en haut
    fillElement.setAttribute('y', 30 - fillHeight); // Assurez-vous que cela correspond à la hauteur de votre SVG
}
  
}


