var signUpButton = document.getElementById("signUp");
var signInButton = document.getElementById("signIn");
var container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// });
// signInButton.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// });

function SignUp(){
    
    container.classList.toggle("right-panel-active");
    
}

function SignIn(){
    container.classList.toggle("right-panel-active");
}