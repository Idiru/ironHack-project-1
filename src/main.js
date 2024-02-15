const card1 = [
    {
      swipeLeft: {
        religion: 20,
        money: -20,
      },
      swipeRight: {
        religion: -2,
        money: 40,
      },
    },
  ];

// Create a player
const player = new Player()

// Create a game
const game = new Game();

// Create a card
const card = new Card("test", card1)

console.log(player.impactCharacteristics(card.stats))


