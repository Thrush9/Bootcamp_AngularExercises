function checkPalindrome(word:String){

    let wordArray = word.split('');
    let reverseArray = wordArray.reverse();
    let reverseWord = reverseArray.join('');
    return (word == reverseWord) ? true : false;
}

//var test = "madam";
//console.log(checkPalindrome(test));

var checkList:String[] = new Array("madam","aha","todo","tenet","civic");
checkList.forEach(element => {
    if(checkPalindrome(element))
    console.log(element);
});