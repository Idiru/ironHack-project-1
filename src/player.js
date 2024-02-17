

class Player {

    constructor(){
        this.religion = 50
        this.money = 50
    }


    impactCharacteristics(choice, card) { //Method to impact the player's characteristics based on the choice and the current card's characteristics
        console.log(choice)
        this.religion += card.stats[choice].religion //We impact all characteristics based on the choice
        this.money += card.stats[choice].money¡
        return this // Maybe not needed 
      }

      

}