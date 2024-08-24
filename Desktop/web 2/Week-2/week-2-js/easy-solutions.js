/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    let sortedStr2 = str2.toLowerCase().split("").sort().join("");
    if(sortedStr1 == sortedStr2){
      return true;
    }else {
      return false;
    }
    };


/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let greaterNum = numbers[0];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > greaterNum) {
            greaterNum = numbers[i];
        }
    }
    return greaterNum ;
    
}
let Input = [3, 7, 2, 9, 1]
let res = findLargestElement(Input);
console.log(res)
