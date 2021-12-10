
function loginFun(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(username);
    var data =JSON.parse(user);
    console.log(data);

    if (user == null) {
        result.innerHTML = 'wrong username';
    } else if (username == username && pass == pass){
        window.location.href="home.html";   

    } else {
        result.innerHTML = 'wrong password';
    }

}

