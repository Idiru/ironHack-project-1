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
            nextCardId: 1
          },
          swipeRight: {
            religion: 1,
            money: -1,
            nextCardId: 1
          },
      }  
 
    },
  ];

class Deck { //A new class to have a deck of cards
    constructor() {
        this.cards = []
        this.currentCard = null
        this.initialize()
      }


    initialize() { //A method to initialize the deck base on an array of cards
        cardsStats.forEach(stat => {
          this.cards.push(new Card(stat))
        })
        this.currentCard = this.cards[0]
    }
    
    selectCard() {
      
    }
}
