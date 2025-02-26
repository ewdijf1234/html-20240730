/*
    암묵적 형변환 >> 원시적 데이터 타입에서만 지원한다.
*/

/*
    문자열 타입으로 형변환
    - + 연산자를 사용할 때 좌항이나 우항 중에 하나라도 문자열이 존재하면 문자열이 아닌 항을 문자열로 자동 형변환
*/
console.log(1 + '1'); // 더하기 연산에서는 숫자가 아닌 문자열로 반환된다.



console.log('==============================');

/*
    숫자 타입으로 형변환
    - + 연산자를 제외한 나머지 산술 연산 혹은 대소 비교 연산에 대해서 좌항과 우항 중 하나라도 숫자가 존재하면 숫자가 아닌 항을 숫자로 자동 형변환 
*/
console.log(1 - '1');


console.log('==============================');

/*
    불리언 타입으로 형변환
    - '', 0, -0, NaN, null, undefined는 false, 나머지는 true로 자동 형변환
*/
if (null) console.log('is not null');
if (!null) console.log('is null');


console.log('==============================');

/*
    명시적 형변환
*/

/*
    문자열 타입으로 형변환
    - String 클래스의 생성자 함수를 사용 (new 연산자 없이)
    - 데이터.toString()
*/
console.log(Sting(10), typeof String(10)); // log에서 두개 이상 작성 시, 띄어쓰기 연산되어 값이 출력됨
console.log((10).toString(),typeof(10).toString);


console.log('==============================');

/*
    숫자 타입으로 형변환
    - Number 클래스의 생성자 함수를 사용 (new 연산자 없이)
    - 문자열일 경우 parseInt(문자열), parseFloat(문자열) 메서드 사용 가능
*/
console.log(Number(false), typeof Number(false));
console.log(parseFloat('10.34'), typeof parseFloat('10.34'));



console.log('==============================');

/*
    불리언 타입으로 형변환
    - Boolean 클래스의 생성자 함수를 사용 (new 연산자 없이 사용)
*/
console.log(Boolean('문자열'),typeof Boolean('문자열'));



console.log('==============================');

/*
    단축 평가 
    - 논리 연산자는 논리 결과를 결정하는 피연산자의 값을 그대로 반환
    - true && data => data
    - false && data => false
    - true || data => true
    - false || data => data
*/
console.log(true && '고길동');

