class Card { //A class to create a card
  constructor(stat) {
    this.id = stat.id
    this.name = stat.name;
    this.description = stat.description;
    this.image = stat.image;
    this.answer1 = stat.answer1;
    this.answer2 = stat.answer2;
    this.stats = stat.stats;
  }
}
