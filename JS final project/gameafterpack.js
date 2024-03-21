let correctWord=localStorage.getItem("correctWord"),totalWord=localStorage.getItem("totalWordsAttended");
let clues=JSON.parse(localStorage.getItem("clues"));
let allPacks=Object.keys(clues);
let historyPacks = localStorage.getItem("history"), geography = localStorage.getItem("geography"), buisness = localStorage.getItem("business"), social = localStorage.getItem("social");
document.getElementById("totalWordsAttended").innerText= correctWord+"/"+(totalWord-1)+"  words attended";
function loginCheck(){
    let userCheck=localStorage.getItem("currentUser");
    console.log(userCheck);
    if(userCheck!="."){
        document.getElementById("icon").classList.remove("none");
        document.getElementById("icon").innerText=userCheck[0].toUpperCase();
        document.getElementById("log-inButton").classList.add("none");
    }
    else{
        document.getElementById("log-inButton").classList.remove("none");
        document.getElementById("icon").classList.add("none");
    }
}
loginCheck();
function changeWindow(){
    window.location.href="loginPage.html";
}
function styleSet(packname){
    console.log(packname);
    let gradientColor=["#C71DF7,#E2C97B","#CB2E5C,#8084C8","#C1FAA9,#31C46A","#DC616F,#F67B0C","#FBAB7E,#F7CE68"];
    if(historyPacks.includes(packname)){
        console.log(historyPacks);
        document.getElementById(packname+"heading").innerText="History Pack";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[1]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#CB2E5C";
    }
    else if(buisness.includes(packname)){
        console.log(buisness);
        document.getElementById(packname+"heading").innerText="Buisness";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[2]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#C1FAA9";
    }
    else if(geography.includes(packname)){
        console.log(geography);
        document.getElementById(packname+"heading").innerText="Geography";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[3]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#DC616F";
    }
    else if(social.includes(packname)){
        console.log(social);
        document.getElementById(packname+"heading").innerText="Social Science";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[4]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#FBAB7E";
    }
    else{
        document.getElementById(packname+"heading").innerText="Knoword Originals";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[0]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#C71DF7";
    }
}
function buildPacks(){
    let mainPack=document.getElementById("pack-container");
    for(let index=0;index<allPacks.length;index++){
        let totalCountnumber=Object.keys(clues[allPacks[index]]),
        countText=document.createTextNode(totalCountnumber.length+" words");
        if(totalCountnumber.length==0){
            continue;
        }
        let headingInnerText=allPacks[index].split("_").join(" ");
        let wholePack=document.createElement("button"),
        packHead = document.createElement("p"),
        totalWord = document.createElement("p"),
        packHeadText=document.createTextNode(headingInnerText),
        headContainer=document.createElement("div");
        wholePack.id = allPacks[index];
        packHead.id=allPacks[index]+"header";
        totalWord.id=allPacks[index]+"wordCount";
        headContainer.id=allPacks[index]+"heading";
        wholePack.className="packs";
        packHead.className="pack-head";
        totalWord.className="pack-word-count";
        headContainer.className="header-container";
        wholePack.setAttribute("onclick","setPlay(id)")
        mainPack.appendChild(wholePack);
        packHead.appendChild(packHeadText);
        totalWord.appendChild(countText);
        let containerOfHeading=document.getElementById(allPacks[index]);
        containerOfHeading.append(packHead,totalWord);
        wholePack.appendChild(headContainer);
        styleSet(allPacks[index]);
    }
}
buildPacks();
function setPlay(tag){
    localStorage.setItem("playingPack",tag)
    window.location.href="game.html";
}


function percentCalc(){
    let calculation= (correctWord/(totalWord-1))*100||0;
    console.log(correctWord,totalWord+"cw,tw");
    document.getElementById("percentCorrect").innerText=Math.floor(calculation)+"%  of  100";
}
percentCalc();