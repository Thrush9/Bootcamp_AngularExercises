function checkPalindrome(word) {
    var wordArray = word.split('');
    var reverseArray = wordArray.reverse();
    var reverseWord = reverseArray.join('');
    return (word == reverseWord) ? true : false;
}
//var test = "madam";
//console.log(checkPalindrome(test));
var checkList = new Array("madam", "aha", "todo", "tenet", "civic");
checkList.forEach(function (element) {
    if (checkPalindrome(element))
        console.log(element);
});
