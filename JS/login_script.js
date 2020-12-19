// var LOGIN = document.getElementById('LOGIN');
// LOGIN.addEventListener('click', function(){
//     alert('히히');
// })

// var SIGNUP = document.getElementById('SIGNUP');
// SIGNUP.addEventListener('click', function(){
//     alert('이건 다음에 만들어 본다... 어렵당ㅠ');
// })

       
        id = prompt('아이디를 입력해주세요.');
        if(id=='egoing'){
            password = prompt('비밀번호를 입력해주세요.');
            if(password==='111111'){
                alert('인증 했습니다.');
            } else {
                alert('인증에 실패 했습니다.');
            }
        } else {
            alert('인증에 실패 했습니다.');
        }