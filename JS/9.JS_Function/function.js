/*
    함수 : 어떤 작업을 수행하기 위해 필요한 구문들의 집합
    - function 함수명(매개변수,...) {실행구문... }
    - 동일한 코드를 반복해서 작성하려고 할때 반복을 제거하여 코드의 재사용성을 높이는 용도
    - 특정 기능이나 코드 구문에 대하여 이름을 부여하는 용도
    - 특정 작업들에 대해서 모듈화를 위한 용도로 사용할 수 있음
*/
function add(a, b) {
    return a + b;
}

var result = add(10,20);
console.log(result);


/*
    함수 표현식 : 함수도 객체 리터럴 방식으로 정의할 수 있고 변수에 할당할 수 있음 
*/
/*
    - 기명 함수 표현식 
*/
var func1 = add;
// var func1 = add(); >> undefined로 정의되어 있는 함수들을 호출하였기 때문에 NaN의 값이 출력된다.
func1(99,99);
console.log(result);

var func2 = function add2 (a,b) {
    console.log(a+b);

}


func2(-10, -20);
// 기명 함수 형태로 작성한 함수 표현식은 해당 함수명으로 호출이 불가능
// add2(-10, -20); >> 블럭 지역변수 설정을 해버렸기 때문에 외부에서는 코드 블럭 내부에 정의되어 있는 함수들을 불러오지 못한다.

/*
    - 익명 함수 표현식
*/
var func3 = function (a,b) {
    console.log(a+b);
}
func3(66,33);


/*
    콜백 함수 : 다른 함수에 매개변수로 전달하는 함수
*/
function add3 (preProcess, a, b) { // 외부에서 값을 매개받아 코드 블럭 내부로 전달해주는 변수를 사용할 것이다.
    var aa = preProcess(a);
    var bb = preProcess(b);
    console.log(aa,bb);
}

function pre1 (data) {
    return String(data); // 문자열 데이터로 값을 받아 문자열의 길이를 연산해준다. (출력되는 값 : 1020)
}

add3(pre1, 10, 20);
add3(function (data) {return -data}, 10, 20);

function func4 () {
    return function () {
        console.log('반환된 함수');
    }
};
var result2 = func4(); // = func4()();
result2();
func4()();       