class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayname(){
        console.log(`Name: ${ this.name }`)
    }
    showstats(){
        console.log(`Health: ${ this.health } Speed: ${this.speed} Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`Health: ${ this.health } `)

    }
}


const ninja1 = new Ninja("Dylan KP");
ninja1.sayname();
ninja1.showstats();
ninja1.drinkSake();
ninja1.showstats();
