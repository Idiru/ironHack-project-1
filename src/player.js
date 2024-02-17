const religionDisplay = document.getElementsByClassName("religion")
const moneyDisplay = document.getElementsByClassName("money")

class Player {

    constructor(){
        this.religion = 50
        this.money = 50
        religionDisplay[0].innerHTML = this.religion
        moneyDisplay[0].innerHTML = this.money
    }


    impactCharacteristics(choice, card) { //Method to impact the player's characteristics based on the choice and the current card's characteristics
        console.log(choice)
        this.religion += card.stats[choice].religion //We impact all characteristics based on the choice
        this.money += card.stats[choice].money
        religionDisplay[0].innerHTML = this.religion
        moneyDisplay[0].innerHTML = this.money
        return this // Maybe not needed 
      }

      

}