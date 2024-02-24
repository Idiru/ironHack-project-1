//The whole raw data
const cardsStats = [
  {
    id: 0,
    name: "Creation of a caserne",
    description:
      "Presidente, even our brave soldiers need a roof! A new caserne means more boots to march and less chickens to dodge. Let's build it! ¡Vamos!",
    image: "./images/cuban-military.jpg",
    answer1:
      "¡Claro que sí, General! We'll build barracks so grand, our enemies will surrender in envy!",
    answer2:
      "Imposible General! The vault is emptier than a politician's promises pre-election",
    stats: {
      swipeLeft: {
        religion: 0,
        military: 20,
        communism: 10,
        capitalism: -10,
        nextCardId: 1,
      },
      swipeRight: {
        religion: 0,
        military: -20,
        communism: -10,
        capitalism: 10,
        nextCardId: 1,
      },
    },
  },

  {
    id: 1,
    name: "Fiesta Nacional",
    description:
      "Presidente, the people crave celebration! A grand Fiesta Nacional will ignite joy and camaraderie amongst our citizens. Shall we dance in the streets or save the rum for another day?",
    image: "./images/communist-leader.jpg",
    answer1:
      "¡Sí, let the music play! We'll host a fiesta that'll make the sun envious it has to set!",
    answer2:
      "Ah, the only salsa tonight will be on rice. Save the fiesta funds; our treasury isn't a piñata!",
    stats: {
      swipeLeft: {
        religion: 5,
        military: 20,
        communism: 10,
        capitalism: 10,
        nextCardId: 2,
      },
      swipeRight: {
        religion: -5,
        military: -20,
        communism: -10,
        capitalism: -5,
        nextCardId: 2,
      },
    },
  },

  {
    id: 2,
    name: "Tropican Coffee Debate",
    description:
      "The world craves our Tropican coffee, but our beans are a national treasure! Should we export our finest brews or keep the rich aroma for our citizens?",
    image: "./images/capitalist-leader.jpg",
    answer1: `To the world, we say, "Enjoy our coffee!" Let's export and watch our economy perk up like a morning cafecito!`,
    answer2:
      "No, our coffee stays in Tropico! Let our people wake up to the smell of prosperity, not exports!",
    stats: {
      swipeLeft: {
        religion: 0,
        military: 0,
        communism: -10,
        capitalism: 10,
        nextCardId: 3,
      },
      swipeRight: {
        religion: 0,
        military: 0,
        communism: 10,
        capitalism: -10,
        nextCardId: 3,
      },
    },
  },

  {
    id: 3,
    name: "Rum Ration Conundrum",
    description:
      "People are striking Presidente – they wish for rum rations to flow like our glorious waterfalls. Should we fill their cups to raise their spirits or keep the barrels corked for sale?",
    image: "./images/religion-leader.jpg",
    answer1:
      "Pour the rum, and let their spirits soar! Happy citizens are the heart of Tropico, even if a little wobbly.",
    answer2:
      "Not a drop to drink! Our rum is more valuable than liquid gold on the global market.",
    stats: {
      swipeLeft: {
        religion: 20,
        military: 5,
        communism: 20,
        capitalism: -40,
        nextCardId: 4,
      },
      swipeRight: {
        religion: 5,
        military: -20,
        communism: 40,
        capitalism: 20,
        nextCardId: 4,
      },
    },
  },

  {
    id: 4,
    name: "Papaya Protocol",
    description: `Presidente, Tropico's papayas are rumored to hold the secret to longevity! Do we export our "Fountain of Youth" fruit, or keep the elixir for ourselves to ensure a long rule?`,
    image: "./images/capitalist-leader.jpg",
    answer1:
      "Spread the seeds of youth! Our papayas will promise prosperity and a zest for life across the globe!",
    answer2:
      "Preserve our papayas for Tropicanos only. We must secure the secret to long life and long rule!",
    stats: {
      swipeLeft: {
        religion: -40,
        military: 0,
        communism: -20,
        capitalism: 40,
        nextCardId: 5,
      },
      swipeRight: {
        religion: 20,
        military: 0,
        communism: 10,
        capitalism: -40,
        nextCardId: 5,
      },
    },
  },

  {
    id: 5,
    name: "Salsa Switcheroo",
    description:
      "Our island rhythms are at risk! The annual salsa festival is approaching, but there's a vinyl shortage. Should we import expensive records or switch to reggaeton this year?",
    image: "./images/communist-leader.jpg",
    answer1:
      "Keep the salsa spinning! We'll import what we need. Our traditions are worth every peso!",
    answer2:
      "Time to shake it up! Let the reggaeton rhythms rule this year's festival. ¡Que comience la fiesta!",
    stats: {
      swipeLeft: {
        religion: 0,
        military: 10,
        communism: 10,
        capitalism: 10,
        nextCardId: 6,
      },
      swipeRight: {
        religion: -100,
        military: -100,
        communism: -100,
        capitalism: -100,
        nextCardId: 6,
      },
    },
  },

  {
    id: 6,
    name: "Diogo's Divine Dilemma",
    description:
      "Presidente, a wandering prophet named Diogo has docked at our shores, claiming he can teach fish to sing! Do we welcome his aquatic choir, or should this fish-whisperer sail away?",
    image: "./images/cuban-military.jpg",
    answer1:
      "Let the fish sing! If Diogo's as good as his word, we'll have the world's first underwater concert.",
    answer2:
      "Fish are for frying, not for hymns. Send Diogo packing before we have a piscatorial uprising!",
    stats: {
      swipeLeft: {
        religion: 20,
        military: -20,
        communism: 0,
        capitalism: 0,
        nextCardId: 7,
      },
      swipeRight: {
        religion: -20,
        military: 20,
        communism: 0,
        capitalism: 0,
        nextCardId: 8,
      },
    },
  },

  {
    id: 7,
    name: " Diogo's Volcanic Venture",
    description:
      "I, Diogo, have been divinely inspired to propose a festival on the volcano's edge. They say dancing on the brink will please the fire spirits and ensure decades of prosperity... or perhaps awaken a fiery fury.",
    image: "./images/religion-leader.jpg",
    answer1:
      "Let's dance with the fire spirits! A volcano festival will ignite our destiny.",
    answer2:
      "Diogo, your fiery heart might melt even the sternest resolve, but we shall keep our festivities on safer ground.",
    stats: {
      swipeLeft: {
        religion: -100,
        military: -100,
        communism: -100,
        capitalism: -100,
        nextCardId: 0,
      },
      swipeRight: {
        religion: -10,
        military: 10,
        communism: 0,
        capitalism: 0,
        nextCardId: 0,
      },
    },
  },

  {
    id: 8,
    name: " Midnight Oil Dilemma",
    description:
      "Our brightest minds have invented a 'Midnight Oil' lamp that burns forever without refueling! It's a scientific marvel, but the night owls claim it steals the stars from the sky.",
    image: "./images/capitalist-leader.jpg",
    answer1:
      "Let there be light! Innovation illuminates our path to the future.",
    answer2:
      "The stars have guided us for centuries. Keep the night sky sacred.",
    stats: {
      swipeLeft: {
        religion: 5,
        military: -10,
        communism: -10,
        capitalism: 5,
        nextCardId: 0,
      },
      swipeRight: {
        religion: -5,
        military: 10,
        communism: -10,
        capitalism: 5,
        nextCardId: 0,
      },
    },
  },
];

const cardTitle = document.getElementsByClassName("card-title");
const cardDescription = document.getElementsByClassName("card-description");
const answer1 = document.getElementsByClassName("answer-1");
const answer2 = document.getElementsByClassName("answer-2");
const cardImage = document.getElementsByClassName("card-image");

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
    cardTitle[0].innerHTML = this.currentCard.name; //We define the card name
    cardDescription[0].innerHTML = this.currentCard.description; //We define the card description
    answer1[0].innerHTML = this.currentCard.answer1; //We define the card anwers
    answer2[0].innerHTML = this.currentCard.answer2;
  }

  //Select a new card
  selectCard(choice) {
    this.currentCard = this.cards[this.currentCard.stats[choice].nextCardId]; //We update the current card based on the decision of the player and the card characteristics
    cardTitle[0].innerHTML = this.currentCard.name; //Update of the card title
    cardDescription[0].innerHTML = this.currentCard.description; // Update of the card description
    answer1[0].innerHTML = this.currentCard.answer1; //Update the card answers 
    answer2[0].innerHTML = this.currentCard.answer2; 
    cardImage[0].style.background = `url('${this.currentCard.image}')`; //Update the card image
    cardImage[0].style.backgroundRepeat = "no-repeat";
    cardImage[0].style.backgroundSize = "cover";
  }
}
