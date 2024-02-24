const religionDisplay = document.getElementsByClassName("religion");
const militaryDisplay = document.getElementsByClassName("military");
const communismDisplay = document.getElementsByClassName("communism");
const capitalismDisplay = document.getElementsByClassName("capitalism");
const losingScreen = document.querySelector(".container-lost-game-screen")

class Player {
  constructor() {
    this.religion = 50;
    this.military = 50;
    this.communism = 50;
    this.capitalism = 50;
  }

  checkRange(){ //We check the score of all entities to ensure that we don't have a score higher than 100
    //If the score is higher than 100, we define 100
    if (this.religion > 100) this.religion = 100;
    if (this.military > 100) this.military = 100;
    if (this.communism > 100) this.communism = 100;
    if (this.capitalism > 100) this.capitalism = 100;
  }

  impactCharacteristics(choice, card) {
    //Method to impact the player's characteristics based on the choice and the current card's characteristics
    this.religion += card.stats[choice].religion; //We impact all characteristics based on the choice
    this.military += card.stats[choice].military;
    this.communism += card.stats[choice].communism;
    this.capitalism += card.stats[choice].capitalism;
    player.fillShape()
  }

  //Check the Characteristics score to display the losing screen if needed
  checkCharacteristics(){
    if(this.religion <= 0 || this.military <= 0 || this.communism <= 0 || this.capitalism <= 0){
        mainScreen.style.display = "none"
        losingScreen.style.display = "flex"
    } else {
        return
    }
  }

  //Fill the characteristics shapes based on their scores 
  fillShape() {
    const characteristics = [
        {
            percentage: this.religion,
            maxHeight: 30,
            cssClass: ".religion"
        
        },

        {
            percentage: this.military,
            maxHeight: 30,
            cssClass: ".military"
        
        },

        {
            percentage: this.communism,
            maxHeight: 30,
            cssClass: ".communism"
        
        },

        {
            percentage: this.capitalism,
            maxHeight: 30,
            cssClass: ".capitalism"
        
        },
    ]

    characteristics.forEach(characteristic => {
        const maxHeight = characteristic.maxHeight; // SVG height
        const fillElement = document.querySelector(characteristic.cssClass);
        const fillHeight = (maxHeight * characteristic.percentage) / 100;
        fillElement.setAttribute('height', fillHeight);
        // To fill the svg from the bottom to the top
        fillElement.setAttribute('y', 30 - fillHeight);
    });
    
}

//Cheat code to win easily 
gimmeMore(){
    this.religion += 100
    this.military +=  100
    this.communism +=  100
    this.capitalism +=  100
    player.fillShape()
    return "done"
}
  
}
