let dummy=localStorage.getItem("clues");
let clues=JSON.parse(dummy),dummy1=localStorage.getItem("users"),currentUser=localStorage.getItem("currentUser"),users=JSON.parse(dummy1);
function createPack(){
    cheking();
    let nameofPack=(document.getElementById("packName").value).split(" ").join("_"),
    catelog=document.getElementById("categorytoBeSelected").value,
    nextIndex;//=||0
    if(users[currentUser]==undefined){
        nextIndex = 0;
    }
    else{
        nextIndex = Object.keys(users[currentUser]);
    }
    console.log(catelog);
    let categorySetter=JSON.parse(localStorage.getItem(catelog));
    console.log(categorySetter);
    if(nameofPack!=""){
        users[currentUser][nextIndex.length]={}
        users[currentUser][nextIndex.length].pack=nameofPack;
        users[currentUser][nextIndex.length].category=catelog;
        clues[nameofPack]={};
        categorySetter.push(nameofPack);
        console.log(clues);
        localStorage.setItem(catelog,JSON.stringify(categorySetter));
        localStorage.setItem("clues",JSON.stringify(clues));
        localStorage.setItem("users",JSON.stringify(users));
        window.location.href="profilePage.html";
    }
}

function cheking(){
    let userName=localStorage.getItem("currentUser");
    if(userName!=""){
        return
    }
    else{
        alert("Login or sign up see what's happening");
        window.location.href="loginPage.html";
    }
}
function cancel(){
    window.location.href="profilePage.html";
}
