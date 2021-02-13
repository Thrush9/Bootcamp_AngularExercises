var player = /** @class */ (function () {
    function player(name, age) {
        this.playerName = name;
        this.playerAge = age;
    }
    player.prototype.checkEligibilty = function () {
        return this.playerAge >= 25 ? "Eligible" : "Not Eligible";
    };
    player.prototype.displayInfo = function () {
        return ("Name : " + this.playerName + " Age : " + this.playerAge +
            " Eligibility : " + this.checkEligibilty());
    };
    return player;
}());
var mike = new player("Mike", 27);
console.log(mike.displayInfo());
