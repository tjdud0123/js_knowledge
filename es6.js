// var - function scope
var v; // 초기값 필요없음 
var v = 321; // 변수 재선언 가능
v = 234; // 재할당 가능
console.log("v : ", v);

// let - Block scope (일반적 언어들)
let l; // 초기값 필요없음
let l = 321; // 재선언 불가 : Identifier 'l' has already been declared
l = 234; // 재할당 가능
console.log("l : ", l);


// const - Block scope
const c; // 초기값 필요 Missing initializer in const declaration //
const c = 321; // 재선언 불가 : Identifier 'c' has already been declared
c = 234; // 재할당 불가
console.log("c : ", c);

function funcScope() {
    var v1 = 123;
    if (true) {
        var v1 = 123;
        let ll = 'abc';
    }
    console.log('let은 Block Scope, ll : ', ll); // 블락 바깥에서 사용 불가 ; ll is not defined
}
funcScope();
console.log('var은 function Scope, v1 : ', v1); // 함수 바깥에서 변수 사용 불가

//---------------------------------------------------------------------------

// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
(x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100

// ES6
const pow = x => x * x;
console.log(pow(10)); // 100
