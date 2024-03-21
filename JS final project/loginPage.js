let dummy=localStorage.getItem("userLogin"),userLogin,currentUser,users=JSON.parse(localStorage.getItem("users"));
function signup(){
    let signinName=document.getElementById("singinName").value,
    passHolder=document.getElementById("signinPass").value,userNames,
    regExFinderName=signinName.search(/([^a-z  \s])./ig),
    passReg=passHolder.search(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-z0-9]{8,16}/g);
    console.log(signinName,passHolder);
    if(dummy!=null){
        userLogin=JSON.parse(dummy);
        userNames=Object.keys(userLogin);
    }
    if(!(userNames.includes(signinName))&&regExFinderName==-1){
        if((passHolder.length>8)&&(passHolder.length<16)&&(passReg!=-1)){
            userLogin[signinName]=passHolder;
            localStorage.setItem("userLogin",JSON.stringify(userLogin));
            currentUser=signinName.split(" ").join("_");
            users[currentUser] ={
                0:{
                    pack:"history_of_world",
                    category:"history",
                }
            }
            localStorage.setItem("users",JSON.stringify(users));
            localStorage.setItem("userLogin",JSON.stringify(userLogin));
            localStorage.setItem("currentUser",currentUser);
            console.log("next-change");
            window.location.href="index.html";
        }
        else{
            document.getElementById("signupPassCheck").classList.remove("none");
        }
    }
    else{
        document.getElementById("signupUser").classList.remove("none");
    }
}

function logIn(){
    let userName,passHolder=document.getElementById("loginPass").value,
    logInName=(document.getElementById("loginName").value);
    userLogin=JSON.parse(dummy);
    console.log(dummy)
    if(dummy!=null){
        userName=Object.keys(userLogin);
        if((userName.includes(logInName))){
            if((userLogin[logInName]==passHolder)){
                console.log("hello")
                currentUser=logInName.split(" ").join("_");
                localStorage.setItem("currentUser",currentUser);
                window.location.href="index.html";
            }
            else{
                document.getElementById("loginPassCheck").classList.remove("none");
            }
        }
        else{
            document.getElementById("loginUser").classList.remove("none");
        }
    }
    else{
        document.getElementById("loginUser").classList.remove("none");
    }
}

function cancel(){
    window.location.href="index.html";
}
function changetoLogin(){
    document.getElementById("login-container").classList.add("none");
    document.getElementById("signup-container").classList.remove("none");
    document.getElementById("signupUser").classList.add("none");
    document.getElementById("signupPassCheck").classList.add("none");
}
function changetoSignup(){
    document.getElementById("login-container").classList.remove("none");
    document.getElementById("signup-container").classList.add("none");
    document.getElementById("loginUser").classList.add("none");
    document.getElementById("loginPassCheck").classList.add("none");
}