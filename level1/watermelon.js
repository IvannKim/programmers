/* 수박수박수박수박수박수?

문제 설명
길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

제한 조건
n은 길이 10,000이하인 자연수입니다.

입출력 예
n	return
3	수박수
4	수박수박 */

const watermelonNum = 4;

const makeWatermelon = n => {
    let watermelon = [];
    for (let i = 0; i < n; i++) {
        watermelon.push("수","박")
    }
 return watermelon.splice(0,n).join("")
}

console.log(makeWatermelon(watermelonNum))

const waterMelon = n => "수박".repeat(n).slice(0,n);

console.log(makeWatermelon(watermelonNum))