/* 원하는 요소 스크롤 */
element.scrollIntoView({behavior: "smooth", block: "center"})

/* 콘솔창 에러 메시지 안뜨게 하기 */
console.warn = console.error = () => {};

/* 구조분해 실험 */
const obj = {a:1, b:2, c:3}
const result = undefined
const result2 = null

const {a, c, d} = obj
console.log(a, c, d); // 속성없으면 undefined

const {a, c, d} = result
const {a, c, d} = result2

console.log(a, c, d); // 에러

// undefined는 falsy한 값
if(d) { 
  console.log('hi') // 실행 안됨
}

/* undefined와 array test */
const arr = [];
console.log(arr.length);

console.log(d<arr.length) // 오잉 연산이 되네

console.log(undefined < -1) // 오잉 연산이 되네

console.log(arr[0]) // index 범위밖 : undefined

/* 없는 속성 접근 시*/
const obj = { a: 1, b: 2 }

if(!obj['c']) { //error는 안남
 console.log('not exist key')
}
