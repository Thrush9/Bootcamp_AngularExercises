var Player = /** @class */ (function () {
    function Player(name, age) {
        this.playerName = name;
        this.playerAge = age;
    }
    Player.prototype.checkEligibilty = function () {
        return this.playerAge >= 25 ? "Eligible" : "Not Eligible";
    };
    Player.prototype.displayDetails = function () {
        console.log("Name : " + this.playerName + " Age : " + this.playerAge +
            " Eligibility : " + this.checkEligibilty());
    };
    return Player;
}());
var p1 = new Player("Hero", 27);
var p2 = new Player("Heroines", 24);
var p3 = new Player("Villan", 29);
//p1.displayDetails();
var playerList = new Array(p1, p2, p3);
playerList.forEach(function (element) {
    element.displayDetails();
});
