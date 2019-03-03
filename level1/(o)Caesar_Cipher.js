/* 시저암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	    n   result
AB	    1	BC
z	    1	a
a B z	4	e F d */
console.log(String.fromCharCode('122')); //알파벳 구하기
console.log('A'.charCodeAt()) //숫자 구하기

const s = 'a B z';
const n = 4;

function solution(s, n) {
    const res = [];
    const splitedString = s.split('')
    splitedString.forEach(element => {
        let elementsIndex = element.charCodeAt() + n
        // elementsIndex가 z를 넘지 않을때
        const upperCaseAlphabet = elementsIndex >= 65 && elementsIndex <= 90;
        const lowerCaseAlphabet = elementsIndex >= 97 && elementsIndex <= 122;
        if (upperCaseAlphabet || lowerCaseAlphabet) {
            res.push(String.fromCharCode(`${elementsIndex}`))
        } else if (elementsIndex > 122 || elementsIndex > 90) { // elementsIndex가 z를 넘을때
            res.push(String.fromCharCode(`${elementsIndex - 26}`))
        }
        if (element != ' ') res.push(' ')
    })
    return res.join('')
}

console.log(solution(s, n))