class Player {

    constructor(){
        this.religion = 50
        this.money = 50
    }   

    impactCharacteristics(card) {
        this.religion += card.swipeLeft.religion
        return this
      }

}