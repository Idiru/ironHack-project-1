const religionDisplay = document.getElementsByClassName("religion")
const militaryDisplay = document.getElementsByClassName("military")
const communismDisplay = document.getElementsByClassName("communism")
const capitalismDisplay = document.getElementsByClassName("capitalism")

class Player {

    constructor(){
        this.religion = 50
        this.military = 50
        this.communism = 50
        this.capitalism = 50
    }


    impactCharacteristics(choice, card) { //Method to impact the player's characteristics based on the choice and the current card's characteristics
        console.log(choice)
        this.religion += card.stats[choice].religion //We impact all characteristics based on the choice
        this.military += card.stats[choice].military
        this.communism += card.stats[choice].communism 
        this.capitalism += card.stats[choice].capitalism
        religionDisplay[0].innerHTML = this.religion
        militaryDisplay[0].innerHTML = this.military
        communismDisplay[0].innerHTML = this.communism
        capitalismDisplay[0].innerHTML = this.capitalism
        return this // Maybe not needed 
      }

      

}