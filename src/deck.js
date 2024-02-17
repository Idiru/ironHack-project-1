const cardsStats = [
    {
      id: 0,
      name: "card 1",
      stats:{
        swipeLeft: {
            religion: 1,
            money: -1,
            nextCardId: 1
          },
          swipeRight: {
            religion: 1,
            money: -1,
            nextCardId: 1
          },
      }  
 
    },

    {
      id: 1, 
      name: "card 2",
      stats:{
        swipeLeft: {
            religion: 1,
            money: -1,
            nextCardId: 2
          },
          swipeRight: {
            religion: 1,
            money: -1,
            nextCardId: 2
          },
      }  
 
    },

    {
      id: 2, 
      name: "card 3",
      stats:{
        swipeLeft: {
            religion: 1,
            money: -1,
            nextCardId: 2
          },
          swipeRight: {
            religion: 1,
            money: -1,
            nextCardId: 2
          },
      }  
 
    },
  ];

const currentCardDisplay = document.getElementsByClassName("current-card-name")


//const currentCardDisplay = document.getElementsByClassName("current-card-name")

class Deck { //A new class to have a deck of cards
    constructor() {
        this.cards = []
        this.currentCard = null
        this.initialize()
      }


    initialize() { //A method to initialize the deck base on an array of cards
        cardsStats.forEach(stat => { //We go trough the array with all the characteristics of the cards
          this.cards.push(new Card(stat)) //We create a structured Card object that we pushed into a global list of cards
        })
        this.currentCard = this.cards[0] //We define the current card
        currentCardDisplay[0].innerHTML = this.currentCard.name 
    }
    
    selectCard(choice) {
      this.currentCard = this.cards[this.currentCard.stats[choice].nextCardId] //We update the current card based on the decision of the player and the card characteristics 
      currentCardDisplay[0].innerHTML = this.currentCard.name 
    }
}
