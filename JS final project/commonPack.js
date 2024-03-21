let clues=JSON.parse(localStorage.getItem("clues"))
// localStorage.setItem("clues","");
// let clues={
//     quick_play:{
//         0:{
//             grammar:"adjective",
//             sentence:"existing, occurring, or carried on between two or more nations",
//             answer:"international"
//         },
//         1:{
//             grammar:"noun",
//             sentence:"a grey or white mass in the sky, made up of very small floating drops of water",
//             answer:"cloud"
//         },
//         2:{
//             grammar:"noun",
//             sentence:"the anniversary of the day on which a person was born, typically treated as an occasion for celebration and the giving of gifts",
//             answer:"birthday"
//         },
//         3:{
//             grammar:"noun",
//             sentence:"a shelter made of canvas or a similar material and supported by poles and ropes, that you can fold up and carry with you",
//             answer:"tent"
//         }
//     },
//     history_of_world:{
//         0:{
//             grammar:"noun",
//             sentence:"the war between british and germany",
//             answer:"world war",
//         },
//         1:{
//             grammar:"noun",
//             sentence:"1498 british invaded which country",
//             answer:"india",
//         }
//     }
// };
// localStorage.setItem("clues",JSON.stringify(clues));

let users=JSON.parse(localStorage.getItem("users"));
// users={
//     naveen_babu:{
//         0:{
//             pack:"history_of_world",
//             category:"history",
//         }
//     }
// }
function disp(){
    document.getElementById("overflow").classList.toggle("none");
}
let allPacks=Object.keys(clues);
// let historyPacks=["history_of_world"];
// localStorage.setItem("history",JSON.stringify(historyPacks));
let historyPacks=localStorage.getItem("history"),geography=localStorage.getItem("geography"),buisness=localStorage.getItem("business"),social=localStorage.getItem("social");

//packCollections

function buildPacks(){
    let mainPack=document.getElementById("pack-container");
    for(let index=0;index<allPacks.length;index++){
        let totalCountnumber=Object.keys(clues[allPacks[index]]),
        countText=document.createTextNode(totalCountnumber.length+" words");
        if((totalCountnumber.length==0)||allPacks[index]=="quick_play"){
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
        wholePack.setAttribute("onclick","setPlay(id)");
        mainPack.appendChild(wholePack);
        packHead.appendChild(packHeadText);
        totalWord.appendChild(countText);
        let containerOfHeading=document.getElementById(allPacks[index]);
        containerOfHeading.append(packHead,totalWord);
        wholePack.appendChild(headContainer);
        styleSet(allPacks[index]);
    }
}

function filterPack(pack){
    document.getElementById("pack-container").replaceChildren("");
    let word = (document.getElementById(pack).value).toLowerCase()||".";
    console.log(word);
    if(word=="."){
        buildPacks();
        return;
    }
    let mainPack=document.getElementById("pack-container");
    for(let index=0;index<allPacks.length;index++){
        let totalCountnumber=Object.keys(clues[allPacks[index]]),
        countText=document.createTextNode(totalCountnumber.length+" words");
        if(!((allPacks[index]).toLowerCase().includes(word))){
            continue;
        }
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
        wholePack.setAttribute("onclick","setPlay(id)");
        mainPack.appendChild(wholePack);
        packHead.appendChild(packHeadText);
        totalWord.appendChild(countText);
        let containerOfHeading=document.getElementById(allPacks[index]);
        containerOfHeading.append(packHead,totalWord);
        wholePack.appendChild(headContainer);
        styleSet(allPacks[index]);
    }
}

function setPlay(tag){
    localStorage.setItem("playingPack",tag)
    window.location.href="game.html";
}

function styleSet(packname){
    let gradientColor=["#C71DF7,#E2C97B","#CB2E5C,#8084C8","#C1FAA9,#31C46A","#DC616F,#F67B0C","#FBAB7E#F7CE68"];
    if(historyPacks.includes(packname)){
        document.getElementById(packname+"heading").innerText="History Pack";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[1]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#CB2E5C";
    }
    else if(buisness.includes(packname)){
        document.getElementById(packname+"heading").innerText="Buisness";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[2]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#C1FAA9";
    }
    else if(geography.includes(packname)){
        document.getElementById(packname+"heading").innerText="Geography";
        document.getElementById(packname).style.backgroundImage="linear-gradient(to bottom right,"+gradientColor[3]+")";
        document.getElementById(packname+"heading").style.backgroundColor="#DC616F";
    }
    else if(social.includes(packname)){
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

function loginCheck(){
    let userCheck=localStorage.getItem("currentUser");
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


buildPacks();