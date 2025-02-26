/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수 효과를 제거한 메서드, 배열을 이용한 편리한 기능을 제공 >> 사용 시, 매우 편하지만 성능은 떨어진다.
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - .sort() 로 정렬하면 사전식 정렬을 하게됨 
*/
// array.sort();
// console.log(array);

//오름차순 정렬의 함수
var asc = function (x,y) {
    return x - y;
}
array.sort(asc);
console.log(array);

//내림차순 정렬의 함수
array.sort(function(x,y) {return y-x})
console.log(array);

var objects = [
    { a: 9, b: -5},
    { a: -2, y: 0},
    { a: 0, b: -3},
    { a: 6, b:5},
];
console.log(objects);
objects.sort(function (x,y) {return x.a - y.a}); //a라는 속성을 기준으로 오름차순 정렬이 된다.
console.log(objects);

console.log('==============================');

/*
    forEach(콜백 함수) : for문 대신 사용
    - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함
    - 원본 배열을 변경 X
    - break, continue 등의 작업을 수행할 수 없음
    - for문 보다 성능이 많이 떨어짐, 가독성이 좋고 편리해서 자주 사용함
    - async await 작업은 forEach 메서드로 사용 불가능
*/
array.forEach(function (item, index) {
    console.log(`index : ${index}, item:${item}`);
});

console.log('==============================');

/*
    map(콜백 함수) : 콜잭 함수의 반환값들로 이루어진 새로운 배열을 생성해서 반환
    - 원본 배열을 변경 X 
    - forEach 단순히 요소나 인덱스를 가지고 작업만 진행 (반환값6X), map은 요소나 인덱스를 가지고 작업한 결과로 새로운 배열을 반환 (반환값O)
*/
var mapArray = array.map(function (item,index) {
     return item + index;
});
// 인덱스만 사용한다고 하더라도 요소만 들어가기 떄문에 반드시 앞에 요소를 표현해주어야 한다. (_,item 등의 표현 사용)
console.log(mapArray);

var newArray = array.map(function (item) {return item;});
console.log(newArray);

console.log('==============================');

/*
    filter(콜백 함수) : 콜백 함수의 반환값이 true인 배열의 요소의 값만 추출한 새로운 배열을 생성
    - 배열의 특정 케이스만 필터링 조건으로 추출해서 새로운 배열을만들고 싶을 떄 사용 
    - 원본 배열 변경 X
*/
var evenArray = array.filter(function(item,index){
    return item % 2 === 0;
});
console.log(evenArray);


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');

/*
    find(value, index) : 
*/


console.log('==============================');