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

/*function saveUserCredentials(){
    var username = document.getElementById("username");
    var pword = document.getElementById("password");
}

function showPassword(username, password){
    var a = document.getElementById("inputUsername");
    var b = document.getElementById("inputPassword");
    if(a.type === "username" ){
        if(b.type === "password"){
            console.log("success");
        }
    }

}*/