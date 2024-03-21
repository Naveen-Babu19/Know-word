let dummy= localStorage.getItem("clues");
let clues=JSON.parse(dummy),dummy1=localStorage.getItem("users"),users=JSON.parse(dummy1),currentUser=localStorage.getItem("currentUser"),allPacks=Object.keys(clues);
let historyPacks=localStorage.getItem("history"),geography=localStorage.getItem("geography"),buisness=localStorage.getItem("business"),social=localStorage.getItem("social");

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
function setUser(){
    document.getElementById("username").innerText=currentUser.split("_").join(" ");
}
function logOut(){
    localStorage.setItem("currentUser",".");
    window.location.href="index.html";
}
setUser();
function profilepackcreator(){
    if(users[currentUser]==null){
        return;
    }
    let packsCreated=Object.entries(users[currentUser]),
    mainPack=document.getElementById("profile-pack-container");
    mainPack.replaceChildren("")
    document.getElementById("pack-head").classList.remove("none");
    document.getElementById("profile-pack-container").classList.remove("none");
    document.getElementById("pack-words-container").classList.add("none");
    for(let index=0;index<packsCreated.length;index++){
        let packstobecreated= packsCreated[index][1];
        let heading=packstobecreated.pack;
        let headingInnerText=heading.split("_").join(" ");
        let wholePack=document.createElement("button"),
        packHead = document.createElement("p"),
        totalWord = document.createElement("p"),
        packHeadText=document.createTextNode(headingInnerText),
        headContainer=document.createElement("div");
        wholePack.id = heading;
        packHead.id=heading+"header";
        totalWord.id=heading+"wordCount";
        headContainer.id=heading+"heading";
        wholePack.className="packs";
        packHead.className="pack-head";
        totalWord.className="pack-word-count";
        headContainer.className="header-container";
        wholePack.setAttribute("onclick","wordCreator(id)")
        let totalCountnumber;
        if(clues[heading]==null){
            totalCountnumber=[];
        }
        else{
            totalCountnumber=Object.keys(clues[heading])
        }
        countText=document.createTextNode((totalCountnumber.length)+" words");
        mainPack.appendChild(wholePack);
        packHead.appendChild(packHeadText);
        totalWord.appendChild(countText);
        let containerOfHeading=document.getElementById(heading);
        containerOfHeading.append(packHead,totalWord);
        wholePack.appendChild(headContainer);
        styleSet(heading);
    }
}
function disp(){
    document.getElementById("overflow").classList.toggle("none");
}
function wordCreator(id){
    document.getElementById("pack-head").classList.add("none");
    document.getElementById("profile-pack-container").classList.add("none");
    document.getElementById("pack-words-container").classList.remove("none");
    document.getElementById("pack-name").innerText=id.split("_").join(" ");
    let words_Arr;
    if(clues.hasOwnProperty(id)){
        words_Arr=Object.keys(clues[id]);
    }
    else{
        return;
    }
    let main=document.getElementById("words-container");
    main.replaceChildren("");
    for(let index=0;index<words_Arr.length;index++){
        let originalWord=clues[id][words_Arr[index]].answer,
        definition=clues[id][words_Arr[index]].sentence,
        grammar=clues[id][words_Arr[index]].grammar;
        let wordContainer=document.createElement("div"),
        word_head=document.createElement("p"),
        grammar_span=document.createElement("span"),
        sentence_span=document.createElement("span"),
        sentence_container=document.createElement("p");
        word_head.innerText=originalWord.split("_").join(" ");
        grammar_span.innerText=grammar+". ";
        sentence_span.innerText=definition;
        wordContainer.id=originalWord;
        wordContainer.className="pack-word";
        grammar_span.className="pack-word-grammar";
        sentence_span.className="pack-word-sentence";
        sentence_container.className="pack-word-sentence-container";
        word_head.className="pack-word-answer";
        sentence_container.append(grammar_span,sentence_span);
        wordContainer.append(word_head,sentence_container);
        main.appendChild(wordContainer);
    }
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
profilepackcreator();

function changeLocation(){
    let selectedPack=document.getElementById("pack-name").innerText;
    localStorage.setItem("selectedPack",selectedPack);
    window.location.href="wordCreator.html";
}
function filterPack(pack){
    document.getElementById("pack-container").replaceChildren("");
    let word = document.getElementById(pack).value||".";
    console.log(word);
    if(word=="."){
        buildPacks();
        return;
    }
    let mainPack=document.getElementById("pack-container");
    for(let index=0;index<allPacks.length;index++){
        let totalCountnumber=Object.keys(clues[allPacks[index]]),
        countText=document.createTextNode(totalCountnumber.length+" words");
        if(!(allPacks[index].includes(word))){
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

function backToPacksPage(){
    document.getElementById("pack-head").classList.remove("none");
    document.getElementById("profile-pack-container").classList.remove("none");
    document.getElementById("pack-words-container").classList.add("none");
}