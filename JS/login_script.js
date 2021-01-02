


// var LOGIN = document.getElementById('LOGIN');
// LOGIN.addEventListener('click', function(){
//     alert('히히');
// })

// var SIGNUP = document.getElementById('SIGNUP');
// SIGNUP.addEventListener('click', function(){
//     alert('이건 다음에 만들어 본다... 어렵당ㅠ');
// })




document.getElementById('LOGIN').onclick = function() {
            var id = document.getElementById('id').value;
            var password = document.getElementById('password').value;
            if (id === "hjkim" && password === "hjkim"){
                    alert("Welcome");
                    location.href="INDEX.html";
            } else {
                    alert("Who are you?");
                }
}


document.getElementById('SIGN UP').onclick = function() {
            alert("Please wait");
                
}




/*   <로그인폼2>

        // id = prompt('아이디를 입력해주세요.');
        // if(id=='hjkim'){
        //     password = prompt('비밀번호를 입력해주세요.');
        //     if(password==='hjkim'){
        //         alert('인증 했습니다.');
        //     } else {
        //         alert('인증에 실패 했습니다.');
        //     }
        // } else {
        //     alert('인증에 실패 했습니다.');
        // }
*/




//  <로그인폼3> 이거 왜 안되니

// document.getElementById('LOGIN').onclick = function() {
//             var id = document.getElementById('id').value;
//             var password = document.getElementById('password').value;
//             if (id === "hjkim" && password === "hjkim"){
//                     alert("Welcome");
//                     location.href="INDEX.html";
//             } else if (document.getElementById('id').value; == ""){
//                     alret("Please enter your id.");
//                     document.getElementById('id').focus();
//             } else if (password !=="hjkim"){
//                     alret("Please enter your password.");
//             } else {
//                     alert("Who are you?");
//                 }
// }


