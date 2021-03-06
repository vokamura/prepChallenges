/* WEEK 1 */
/*
FIND LARGEST NUMBER
task: make a function that determines which number is largest
input: 4, 12, 2
output: 12
*/
function findLargestNumber( num1, num2, num3 ){
	if (num1 > num2 && num1 > num3){
		return num1;
	} else if (num2 > num3 && num2 > num1){
		return num2;
	} else if (num3 > num1 && num3 > num2){
		return num3;
	}
}

findLargestNumber(2,4,12);
/*
task: make a function that, given 3 strings, returns which string is longest
input: 'stuff', 'hi', 'woohoo'
output: 'woohoo'
*/
function findLongestWord( word1, word2, word3){
	if (word1.length > word2.length && word1.length > word3.length){
		return word1;
	} else if (word2.length > word1.length && word2.length > word3.length) {
		return word2;
	} else if (word3.length > word1.length && word3.length > word2.length) {
		return word3;
	}
}

findLongestWord("stuff", "hi", "woohoo");

/*
DETERMINE EVEN DIBIBILITY
task: make a function that, given 2 numbers, determines if the 1st number
	is evenly divisible by the 2nd number
----
input: 10,2
output: true
----
input: 5, 2
output: false
*/

function determineEvenDivisibility( num1, num2 ){
	if (num1 % num2 === 0 ){
		return true;
	} else {
		return false;
	}
}
determineEvenDivisibility(10,2);

/*
CHECK FIRST LETTER CAPITLIZED
task: make a function that, given a string, determines if the 1st letter is capitalized or not
----
input: 'Fruit'
output: true
----
input: 'fruit'
output: false
*/
//this doesn't work
function checkFirstLetterCapitalized( word ){
	if(word[0] === word[0].toUpperCase()){
		return true;
	} else {
		return false;
	}
}
checkFirstLetterCapitalized("first");

/*
CHECK OUTSIDE LETTERS
task: make a function that determines if the first and last letter of a string are the same letter
----
input: 'sisters',
output: true
----
input: 'mister',
output: false
*/

function checkOutsideLetters( word ){
	var last = word.length-1
	if(word[0] === word[last]){
		return true;
	} else {
		return false;
	}
}
checkOutsideLetters("mister");

/* WEEK 2 */
/*
REVERSE STRING
task: make a fuction that uses loops to reverse a string
input: 'greetings earthlings'
output: 'sgnilhtrae sgniteerg' 
*/

function reverseString( string ){
	var newString = '';
	for (var i = string.length-1; i >= 0; i--){
		newString += string[i];
	}
	return newString;
}

reverseString("greetings earthlings");

/*
CALCULATE FACTORIAL
task: calculate the factorial of a number
	factorial is a number multiplied by all the numbers lower than it, down to 1
input: 5
output: 120   (5*4*3*2*1)
*/

function calculateFactorial( number ){
	var output = 0;
	for (var i = number; i >= 0; i--){
		output = output + (number * (number-1))
	}
	return output;
}
calculateFactorial(5);

/*
FIND LONGEST WORD IN ARRAY
task: given an array of words, determine which one is the longest and returns it
input: ['great','days','hi']
output: 'great'
*/
function findLongestWordInArray( wordArray ){
	var bigNumber = 0;
	for (var i=0; i < wordArray.length; i++){
		if (wordArray[i].length > bigNumber) {
			bigNumber = wordArray[i];
		}
	}
	return bigNumber;
}
findLongestWordInArray(['great','days','hi']);

/*
EVERY OTHER LETTER
task: given a string, return a string with every other letter
----
input: 'silliness'
output: 'ilns'
----
input: 'mistermister'
output: 'itritr'
*/
function getEveryOtherLetter( string ){
	var newString = '';
	for (var i=1; i < string.length; i+=2){
		newString += string[i];
	}
	return newString;
}
getEveryOtherLetter("mistermister");

/*
ALPHABETIZE LETTERS
task: given a string, return a string with each letter in alphabetical order
----
input: 'marshmallow'
output: 'aahllmmorsw'
----
input: 'tuba'
output: 'abtu'
*/

function alphabetizeLetters( string ){
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var newString = "";
	for (var i=0; i < alphabet.length; i++){
		for(var k=0; k <string.length; k++){
			if (alphabet[i] === string[k]) {
				newString += string[k];
			}
		}
	}
	return newString;
}
alphabetizeLetters("marshmallow");



