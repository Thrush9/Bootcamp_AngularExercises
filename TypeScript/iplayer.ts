interface iPlayer{
    playerName : String
    playerAge : Number
    displayInfo(): String
}

class player implements iPlayer{
    playerName : String;
    playerAge : Number;

    constructor(name:String,age:Number){
     this.playerName = name;
     this.playerAge = age;
    }

    checkEligibilty():String{
        return this.playerAge >= 25 ? "Eligible" : "Not Eligible"; 
    }

    displayInfo():String{
        return ("Name : " + this.playerName + " Age : " + this.playerAge +
         " Eligibility : "+ this.checkEligibilty());
    }
}


let mike = new player("Mike",27);
console.log(mike.displayInfo());