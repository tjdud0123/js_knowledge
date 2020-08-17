/* 숫자/문자열 배열에서 중복 제거하기 */

let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
// uniqueValues is [3, 1, 5, 2, 4]

/* 간단한 검색(case-sensitive) */
let users = [
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('oli'))

/* 간단한 검색(case-insensitive) */
let res = users.filter(it => new RegExp('oli', "i").test(it.name));

/* 특정 유저가 admin 권한을 갖고 있는지 확인 */
let hasAdmin = users.some(user => user.group === 'admin');

/* array of arrays 펼치기 */
let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = [].concat.apply([], nested);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* 특정 키의 빈도를 포함하는 객체를 만들기 */
let groupByAge = users.reduce((acc, it) =>({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),{});
// groupByAge is {23: 1, 28: 2, 34: 1}

/* array of objects 인덱싱 (lookup table) */
let uTable = users.reduce((acc, it) => ({...acc, [it.id]: it }), {})
//{
  11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
  47: { id: 47, name: 'John', age: 28, group: 'admin' }
}

/* 배열 안의 각각의 item에서 특정 키로 유일한 값들 뽑아내기 */
let listOfUserGroups = [...new Set(users.map(it => it.group))];

/* 객체 key-value map 역전 */
let countries = Object.keys(cities).reduce((acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});

/* 섭씨 온도를 화씨 온도로 바꾸기 */
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);

/* 명시된 키와 함께 읽기 가능한 string 으로 유저 테이블 출력 – 비구조화 할당 */
users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')

/* 객체 배열에서 id가 47이면 나이1 증가 */
let updatedUsers = users.map(p => p.id !== 47 ? p : {...p, age: p.age + 1});

/* A와 B의 합집합 */
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
[...new Set([...arrA, ...arrB])];

/* A와 B의 교집합 */
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
arrA.filter(it => arrB.includes(it));
