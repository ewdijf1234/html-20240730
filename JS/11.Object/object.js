/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 함수를 가질 수 있음 (메서드)
*/


/*
    객체 리터럴 : 자바스크립트에서 가장 일반적인 객체 생성 방법 
    - {}를 사용하영 객체를 생성
*/
var emptyObj = {};

var hongGildong = {
    name: '홍길동',
    age: 23,
    address: '부산광역시',
    greeting: function () {
        console.log(`안녕 난 ${this.name} 이다 시발러마`);
    }
};
console.log(hongGildong);

console.log(hongGildong.name);

hongGildong.greeting();

var name = '이형';
var age = 68;
var address = '서울특별시 운현궁';

var goJong = {
    name, // 키와 값이 포함되어져 있다.
    age,
    address
}
console.log(goJong);

console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생성자로 빈 객체 생성
*/
var emptyObject = new Object(); // 빈 객체
console.log(emptyObject);
emptyObject.name= '이형';
console.log(emptyObject);



console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function King (birth) {
    this.birth = birth;
    this.name = name;
    this.myoName = myoName;
}
var goJong2 = new King('1852-09-08', '이형', '고종');
console.log(goJong2);



console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유효한 변수명일 경우에는 따옴표 생략 가능
    - 유효한 변수명이 아니면 반드시 따옴표를 사용해야함
*/
var seojihoon = {
    'first name': '지훈',
    'last name': '서', // 유효한 변수명이 아니기 때문에 따옴표로 묶어서 표현해주어야 함 (일반적으로 따옴표를 붙여주는 것이 정석이다.)
    'age': 32
}
console.log(seojihoon);


console.log('==============================');

/*
    속성 값 읽기 : 
    - .표기법과 [] 표기법으로 접근 가능
    - .표기법은 유효한 이름일때만 사용가능
    - []표기법은 모든 이름에서 사용 가능, 접근하려고하는 속성을 동적으로 지정할 수 있음
    - 객체에 존재하지 않는 속성에 접근하려 하면 undefined를 반환
*/
console.log(seojihoon.age);
console.log(seojihoon['age']);
console.log(seojihoon[age]); //따옴표 없이 문자열이 아닌 것으로 표기하면 값을 할당헌다. >> 존재하지 않은 속성에 접근하게 된다.
console.log(seojihoon['first name']);

var property = 'age'; // 사용자의 입력 및 매개변수의 값에 따라 내가 접근하고자 하는 값의 속성에 접근 가능하다. (반드시 문자열로 접근하거나 자동 형변환을 통해 출력을 하게 된다.)
console.log(seojihoon[property]);

console.log('==============================');

/*
    속성 값 변경 : 
    - 객체 속성에 접근하여 새로운 값을 할당하면 변경가능
    - 만약 존재하지 않는 속성에 접근하면 새로운 속성이 생성됨
*/



console.log('==============================');

/*
    속성 삭제 : 
    - delete 연산자를 사용하여 속성 제거 가능
*/
delete emptyObject.name;
console.log(emptyObject);

console.log('==============================');

/*
    for-in 문 : 
    - 객체 포함된 키를 순차적으로 접근할 수 있도록 함
    - 문자열로 된 속성의 키가 반환됨
*/
for (var key in seojihoon) {
    console.log(key); //인덱스로 접근하여 값을 변경할 수 있도록 하여줌
}



console.log('==============================');

var soonJong = goJong; //고종에 '이척'이라는 주소값이 포함되어 있다.
soonJong.name = '이척'

console.log(soonJong);

soonJong = {
    name: goJong.name,
    age: goJong.age,
    address: goJong.address
}; //중괄호를 사용하여 만들었기 때문에 새로운 객체를 생성하였고, 이에 대한 속성값은 고종의 속성값을 불러온다.

soonJong.name ='이척';
console.log(soonJong);
console.log(goJong); //순종에는 이척으로 변경되었고, 고종에는 이형의 값이 그대로 되어있다.

//얕은 복사와 깊은 복사 >> 얕은 복사는 주소값을 복사하여 중첩된 객체를 복사하는 것이다.
//반면, 깊은 복사는 중첩되어 있는 속성값을 모두 복사하여 완전히 독립된 객체를 생성하는 것이다.
//얕은 복사는 중첩되어 있는 객체가 있어 수정하기에 불편한 반면 생성이 용이하며 깊은 복사는 데이터 활용에 무리가 있지만
//완전히 독립된 객체로 속성값을 복사해 오는 것이기 때문에 수정하기에 용이하다.

var soonJong = {};
for (var key in goJong) {
    soonJong[key] = goJong[key];
} // 값이 없는 키를 대입

soonJong.name = '이척';
console.log(soonJong);
console.log(goJong);

var soonJong = {...goJong};
soonJong.name = '이척';
console.log(soonJong);
console.log(goJong); //ES6에서는 변수를 분해해 값을 재삽입 할 수 있도록 해준다.