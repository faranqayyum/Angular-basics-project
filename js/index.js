
var restBtn = document.getElementById('reset');


restBtn.addEventListener('click', (e)=>{

    var email =document.getElementById('email').value;
    var username =document.getElementById('username').value;
    var pass =document.getElementById('password').value;


    username.value = '';
    email.value = '';
    pass.value = '';

    localStorage.clear();

});



function signup(e){
    event.preventDefault();

    var email =document.getElementById('email').value;
    var username =document.getElementById('username').value;
    var pass =document.getElementById('password').value;

    var user = {
        email: email,
        username: username,
        password: pass,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('user added');


    window.location.href="login.html";



}
