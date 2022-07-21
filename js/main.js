// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let nameEl = document.getElementById("name");
let password = document.getElementById("password");
let passwordcon = document.getElementById("passwordcon");
let namelog = document.getElementById("logname");
let passwordlog = document.getElementById("logpassword");

// USER ARRAY
let users = loadUsers(), signup = true;
// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() {
  signup = true;
  if (nameEl.value === ""||password.value === "" || passwordcon.value === ""){
      alert("You have left an Empty Field!");
      signup=false;
    }
    if (signup){
      for (i=0;i<users.length;i++){
    if (nameEl.value===users[i].username ){
      alert("Username Already in Use!");
      signup = false;
    }
  }
    }
    
  if (password.value != passwordcon.value && signup){
      alert("Passwords Don't Match!");
      signup=false;
    }
    
  if (signup){
    users.push({
    username:nameEl.value,
    pwd:password.value}
  );
  localStorage.setItem("users", JSON.stringify(users));
    alert("SignUp Successful");
  }
  
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  let signin = true;
  if (namelog.value === ""|| passwordlog.value === ""){
    alert("You have Left an Empty Feild!");
    signin = false;
  }
  if (signin){
   for (i=0;i<users.length;i++){
    if (namelog.value === users[i].username && passwordlog.value === users[i].pwd){
      alert("Login Successfull!");
      signin = false;
      break;
    }
  } 
  }
  if (signin){
    alert("Login Failed");
  }
}
//HELPER FUNCTIONS
function loadUsers(){
  let userStr = localStorage.getItem("users");
  return JSON.parse(userStr) ?? [];
}