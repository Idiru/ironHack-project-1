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

  checkRange(){

    if (this.religion > 100) this.religion = 100;
    if (this.military > 100) this.military = 100;
    if (this.communism > 100) this.communism = 100;
    if (this.capitalism > 100) this.capitalism = 100;

    console.log("Round: ")
    console.log(this.religion)
    console.log(this.military)
    console.log(this.communism)
    console.log(this.capitalism)

  }

  impactCharacteristics(choice, card) {
    //Method to impact the player's characteristics based on the choice and the current card's characteristics
    this.religion += card.stats[choice].religion; //We impact all characteristics based on the choice
    this.military += card.stats[choice].military;
    this.communism += card.stats[choice].communism;
    this.capitalism += card.stats[choice].capitalism;
    player.fillShape()
    return this; // Maybe not needed
  }

  checkCharacteristics(){
    if(this.religion <= 0 || this.military <= 0 || this.communism <= 0 || this.capitalism <= 0){
        mainScreen.style.display = "none"
        losingScreen.style.display = "flex"
    } else {
        return
    }
  }

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
        const maxHeight = characteristic.maxHeight; // Hauteur totale de la forme SVG
        const fillElement = document.querySelector(characteristic.cssClass);
        const fillHeight = (maxHeight * characteristic.percentage) / 100;
        fillElement.setAttribute('height', fillHeight);
        // Ajuster la position y pour remplir de bas en haut
        fillElement.setAttribute('y', 30 - fillHeight); // Assurez-vous que cela correspond à la hauteur de votre SVG
    });
    
}

gimmeMore(){
    this.religion += 100
    this.military +=  100
    this.communism +=  100
    this.capitalism +=  100
    player.fillShape()
    return "done"
}
  
}
