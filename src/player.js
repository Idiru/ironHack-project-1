class Player {

    constructor(){
        this.religion = 50
        this.money = 50
    }   

    impactCharacteristics(choice, card) {
        console.log(choice)
        this.religion += card.stats[choice].religion
        this.money += card.stats[choice].money
        return this
      }

}