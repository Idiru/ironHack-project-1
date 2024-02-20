const cardsStats = [
  {
    id: 0,
    name: "Creation of a caserne",
    description: "El Presidente, even our brave soldiers need a roof! A new caserne means more boots to march and less chickens to dodge. Let's build it! ¡Vamos!",
    image: "./images/cuban-military.jpg",
    answer1: "¡Claro que sí, General! We'll build barracks so grand, our enemies will surrender in envy!",
    answer2: "Imposible General! The vault is emptier than a politician's promises pre-election",
    stats: {
      swipeLeft: {
        religion: 1,
        military: -100,
        communism: 1,
        capitalism: -1,
        nextCardId: 1,
      },
      swipeRight: {
        religion: 1,
        military: -1,
        communism: 1,
        capitalism: -1,
        nextCardId: 1,
      },
    },
  },

  {
    id: 1,
    name: "Card 2",
    description: "Lol",
    image: "",
    answer1: "Answer 1",
    answer2: "Answer 2",
    stats: {
      swipeLeft: {
        religion: 1,
        military: -100,
        communism: 1,
        capitalism: -1,
        nextCardId: 2,
      },
      swipeRight: {
        religion: 1,
        military: -1,
        communism: 1,
        capitalism: -1,
        nextCardId: 2,
      },
    },
  },

  {
    id: 2,
    name: "Card 3",
    description: "Lol",
    image: "",
    answer1: "Answer 1",
    answer2: "Answer 2",
    stats: {
      swipeLeft: {
        religion: 1,
        military: -1,
        communism: 1,
        capitalism: -1,
        nextCardId: 2,
      },
      swipeRight: {
        religion: 1,
        military: -1,
        communism: 1,
        capitalism: -1,
        nextCardId: 2,
      },
    },
  },
];


const cardTitle = document.getElementsByClassName("card-title")
const cardDescription = document.getElementsByClassName("card-description")
const answer1 = document.getElementsByClassName("answer-1")
const answer2 = document.getElementsByClassName("answer-2")


class Deck {
  //A new class to have a deck of cards
  constructor() {
    this.cards = [];
    this.currentCard = null;
    this.initialize();
    
  }

  initialize() {
    //A method to initialize the deck base on an array of cards
    cardsStats.forEach((stat) => {
      //We go trough the array with all the characteristics of the cards
      this.cards.push(new Card(stat)); //We create a structured Card object that we pushed into a global list of cards
    });
    this.currentCard = this.cards[0]; //We define the current card
    cardTitle[0].innerHTML = this.currentCard.name;
    cardDescription[0].innerHTML = this.currentCard.description;
    answer1[0].innerHTML = this.currentCard.answer1;
    answer2[0].innerHTML = this.currentCard.answer2;
  }

  selectCard(choice) {
    this.currentCard = this.cards[this.currentCard.stats[choice].nextCardId]; //We update the current card based on the decision of the player and the card characteristics
    cardTitle[0].innerHTML = this.currentCard.name;  
    cardDescription[0].innerHTML = this.currentCard.description;
    answer1[0].innerHTML = this.currentCard.answer1;
    answer2[0].innerHTML = this.currentCard.answer2;
  }
}
