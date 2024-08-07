var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler (event) {
    var userId = userIdElement.ariaValueMax;
    var userPassword = userPasswordElement.value;
    alert(userId,userPassword);

    if(userId !== 'qwer1234'|| userPassword !== '1234') {
        messageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        return; //좋은 흐름(한갈래 길)으로 코드를 짜야하기 때문에 return값을 통해서 한갈래 길로 흐름을 만들어준다.
    } 
        alert('로그인성공!');
        messageElement.textContent = '';
    } 

function userIdKeyPressHandler (event) {
    if (event.key === 'Enter') userPasswordElement.focus();
}

function userPasswordKeyPressHandler (event) {
    if (event.key === 'Enter') onSignInButtonClickHandler(); //엔터키를 누를 시, 현재 지정한 onSignInButtonClickHandler 동작을 실행한다.
    // alert(event.key); //이벤트 객체 받아오기
}

signInButton.addEventListener('click', onSignInButtonClickHandler); // 전달하기
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElement.addEventListener('keypress', userPasswordKeyPressHandle); //이벤트 객체에 key값 가져오기