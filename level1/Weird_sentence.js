/*
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
입출력 예
s	                return
try hello world	    TrY HeLlO WoRlD
입출력 예 설명
try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 
홀수번째 문자를 소문자로 바꾸면 TrY, HeLlO, WoRlD입니다. 따라서 TrY HeLlO WoRlD 를 리턴합니다.
*/

const s = "try hello world";

function solution(s) {
    let result = [];
    const splitedSentence = s.split(" ");
    for (let i = 0; i < splitedSentence.length; i++) {
        let splitedWord = splitedSentence[i].split("");
        for (let j = 0; j < splitedWord.length; j++) {
            if (j % 2 == 0) {
                result.push(splitedWord[j].toUpperCase())
            } else if (j % 2 == 1) {
                result.push(splitedWord[j].toLowerCase())
            }
        }
        if (i !== splitedSentence.length - 1) {
            result.push(" ")
        }
    }
    return result.join("")
}

console.log(solution(s));

//다른 사람의 풀이(참고)
function toWeirdCase(s){
    var result = "";
  
    for(var word of s.split(" ")) {
      for(var i in word) {
        result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
      }
      result += " ";
    };
  
    return result.slice(0, -1);
  }
  
  console.log(toWeirdCase(s));
  
  //
  function toWeirdCase1(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }

  console.log(toWeirdCase1(s));