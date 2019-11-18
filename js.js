// Q1: Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

// Solution

/*
function FirstReverse(str) {
   str=str.split("");
   wordReverse=""
 for(i=str.length-1;i>=0;i--){

  wordReverse=wordReverse+str[i]

  }
  return wordReverse;
}
// keep this function call here
console.log(FirstReverse('hello'));
*/

// //////////////////////////////


/*Q2
Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

*/

//solution

/*
function FirstFactorial(num) {
  x=1;
  // code goes here
  while(num>0){

    x=x*num;
    num--

  }

  return x;

}
console.log(FirstFactorial(4))
*/

/*Q3:Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.*/

//Solution:

/*
function LongestWord(sen) {
   sen= sen.match(/[a-z0-9]+/gi);
   a=sen[0];
   for(i=1;i<sen.length;i++){
 
     if(a.length<sen[i].length){
       a=sen[i].length;
       a=sen[i];


     }
   }
   return a
  
}

*/ 