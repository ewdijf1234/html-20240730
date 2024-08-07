var users = [
    {
        name: '이성계',
        id: 'taejo',
        password: 'qwer1234',
        telnunmber: '01011111111',
    }, // 객체 넣기
    {
        name: '이방인',
        id: 'jungjong',
        password: 'qwer1234',
        telnunmber: '01022222222',
    },
    {
        name: '이방과',
        id: 'jungjong',
        password: 'qwer1234',
        telnunmber: '01033333333',
    }
]

var userNameElement = document.getElementById('user-name');
var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var userPasswordCheckElement = document.getElementById('user-password-check');
var usesrTelNumberElement = document.getElementById('user-telnumber');
var userAuthNumberElement = document.getElementById('auth-number');

var userNameMessageElement = document.getElementById('user-name-message');
var userIdMessageElement = document.getElementById('user-id-message');
var userPasswordMessageElement = document.getElementById('user-password-message');
var userPasswordCheckMessageElement = document.getElementById('user-password-check-message');
var usesrTelNumberMessageElement = document.getElementById('user-telnumber-message');
var userAuthNumberMessageElement = document.getElementById('auth-number-message');


var userIdButtonElement = document.getElementById('user-id-button');
var usesrTelNumberButtonElement = document.getElementById('user-telnumber-button');
var userAuthNumberButtonElement = document.getElementById('auth-number-button');
var signUpButtonElement = document.getElementById('sign-up-button');

function userIdInputHandler (event) {
    var userId = event.target.value;

    userIdMessageElement.textContent = '';
    userIdMessageElement.className = 'message';

    // if (userId) {
    //     userIdButtonElement.className = 'input-button active'; //값이 (들어있을 때)존재할 때

    // } else {
    //     userIdButtonElement.className = 'input-button disable'; //값이 (비어있을 때)존재하지 않을 때
    // }

userIdButtonElement.className = 'input-button' + (userId ? 'active' : 'disable');
}

function userIdButtonClickHandler (event) {
    var userId = userIdElement.value;
    if(!userId) return;

    var existedId = users.some(function (item,index) {
        return item.id === userId;
    });
    if(existedId) {
        userIdMessageElement.textContent = '이미 존재한다.'; //존재하는 상태이면
        userIdMessageElement.className = 'message error';
    } else {
        userIdMessageElement.textContent = '사용 가능한 아이디입니다.';//존재하지 않은 상태
        userIdMessageElement.className = 'message primary';

    }
}

userIdElement.addEventListener('iuput', userIdInputHandler);
userIdButtonElement.addEventListener('click', userIdButtonClickHandler);