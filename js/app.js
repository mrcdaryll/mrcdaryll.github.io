var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function switchLogin(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0"; 
}

function saveUserCredentials(){
    var userName = document.getElementById("username").value;
    var pword = document.getElementById("password").value;
}

function showPassword(username, pword){
    var a = document.getElementById("inputUsername").value;
    var b = document.getElementById("inputPassword").value;
    if(a.type === username ){
        if(b.type === pword){
            console.log("success");
        }
    }

}