const card1 = [
    {
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
    },
  ];

// Create a player

// Create a game
const game = new Game();

// Create a card
const card = new Card(0, "test", card1)

game.takeDecision(card)



