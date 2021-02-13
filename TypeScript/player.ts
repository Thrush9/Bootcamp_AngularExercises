class Player {
    playerName : String;
    playerAge : Number;

    constructor(name:String,age:Number){
     this.playerName = name;
     this.playerAge = age;
    }

    checkEligibilty():String{
        return this.playerAge >= 25 ? "Eligible" : "Not Eligible"; 
    }

    displayDetails():void{
        console.log("Name : " + this.playerName + " Age : " + this.playerAge +
         " Eligibility : "+ this.checkEligibilty());
    }
}

var p1 = new Player("Hero",27);
var p2 = new Player("Heroines",24);
var p3 = new Player("Villan",29);
//p1.displayDetails();

var playerList:Player[] = new Array(p1,p2,p3);
playerList.forEach(element => {
    element.displayDetails();
});