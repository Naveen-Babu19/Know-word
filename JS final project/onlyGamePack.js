let totalSec, nextChange = 0, lastWord, symbol, decisionArr = ["xmark", "check"], colorTobeShown = "";
let randomNum, userName, originalName, totalIndex, correctWord, totalWord, greenBar, lengthOfClues, lengthOfUser, progressBar, indexGen = [], correctAswers = 0;
let clues = JSON.parse(localStorage.getItem("clues")), wordsAttended = 0, correctWords = 0, deg = 0, colorCG, incdeg = 6, whiteDeg,degtobeget=0,whitedegtobeshown;
progressBar = document.getElementById("progressBar");
let historyPacks = localStorage.getItem("history"), geography = localStorage.getItem("geography"), buisness = localStorage.getItem("business"), social = localStorage.getItem("social");
let grammarInsert = document.getElementById("grammar"), playingPack,difficulty;
playingPack = localStorage.getItem("playingPack");

function difficultyFinder(){
    let levelChoosing = ["easy","medium","hard"],checkClass;
    for(let index=0; index<3;index++){
        checkClass=Object.entries(document.getElementById(levelChoosing[index]).classList).flat();
        console.log(checkClass);
        if(!(checkClass.includes("none"))){
            difficulty=levelChoosing[index];
            break;
        }
    }
    console.log(difficulty);
}

function check() {
    userName = (document.getElementById("answer").value).toLowerCase().split("");
    if (userName.length == 0) {
        progressBar.style.width = "0%";
    }

    for (let index = 0; index < userName.length; index++) {
        if (originalName[index] != userName[index]) {
            nextChange = 0;
            document.getElementById("answer").style.color = "rgb(229, 62, 62)";
            progressBar.style.width = "100%";
            progressBar.style.backgroundColor = "rgb(229, 62, 62)";
            progressBar.style.transition = "0.2s";
            break;
        }
        else {
            nextChange = 1;
        }
    }
    if (nextChange == 1) {
        correctWord = (userName.length);
        greenBar = Math.floor((correctWord / totalWord) * 100);
        progressBar.style.width = greenBar + "%";
        progressBar.style.transition = "0.2s";
        progressBar.style.backgroundColor = "rgb(0, 250, 154)";
        document.getElementById("answer").style.color = "#000000";
    }
    if (userName.length == 0) {
        progressBar.style.width = "0%";
        progressBar.style.color = "#000000";
    }
    if (greenBar == 100) {
        console.log("greenBar", greenBar);
        greenBar = 0;
        correctAswers++;
        colorTobeShown = "check";
        correctWords++
        Word();
        if(playingPack=="quick_play"){
            difficultyFinder();
            setQuestionQuick(difficulty);
        }
        else{
            setQuestion();
        }
    }
}

document.getElementById("skip").addEventListener("click", function () {
    colorTobeShown = "xmark";
    Word();
    if(playingPack=="quick_play"){
        setQuestionQuick(difficulty);
    }
    else{
        setQuestion();
    }
    document.getElementById("answer").focus();
})

document.getElementById("answer").addEventListener("input", check);

let clear = 0;

function hideContainer() {
    if (playingPack != "quick_play") {
        document.getElementById("beforeLevel").style.display = "none";
        document.getElementById("levels").style.display = "none";
        document.getElementById("nextLevel").style.display = "none";
    }
    else {
        document.getElementById("beforeLevel").style = "";
        document.getElementById("levels").style = "";
        document.getElementById("nextLevel").style = "";
    }
}

function setQuestionQuick(level){
    console.log(difficulty);
    document.getElementById("answer").focus();
    console.log()
    wordsAttended++;
    console.log(clues[playingPack][level]);
    lengthOfClues = Object.keys(clues[playingPack][level]);
    console.log(lengthOfClues);
    totalIndex = (randomGenerator(lengthOfClues.length));
    originalName = clues[playingPack][level][totalIndex].answer;
    document.getElementById("answer").placeholder = "Starts with " + originalName[0].toUpperCase();
    lastWord = originalName;
    document.getElementById("answer").value = "";
    document.getElementById("questionsDisplay").innerText = clues[playingPack][level][totalIndex].sentence;
    progressBar.style.width = "0%";
    grammarInsert.innerText = clues[playingPack][level][totalIndex].grammar + ". ";
    originalName = originalName.toLowerCase().split("");
    totalWord = originalName.length;
}

function setQuestion() {
    console.log("setQues,cw,tw" + correctWords, wordsAttended);
    document.getElementById("answer").focus();
    wordsAttended++;
    lengthOfClues = Object.keys(clues[playingPack]);
    totalIndex = (randomGenerator(lengthOfClues.length));
    originalName = clues[playingPack][totalIndex].answer;
    document.getElementById("answer").placeholder = "Starts with " + originalName[0].toUpperCase();
    lastWord = originalName;
    document.getElementById("answer").value = "";
    document.getElementById("questionsDisplay").innerText = clues[playingPack][totalIndex].sentence;
    progressBar.style.width = "0%";
    grammarInsert.innerText = clues[playingPack][totalIndex].grammar + ". ";
    originalName = originalName.toLowerCase().split("");
    totalWord = originalName.length;
}

function Word() {
    let desicion = ["fa-solid fa-check check", "fa-solid fa-xmark xmark"];
    let wordContainer = document.getElementById("decision");
    let createtagI = document.createElement("i"),
        createSpan = document.createElement("span"),
        lwContainer = document.createElement("p");
    createSpan.innerText = lastWord;
    createSpan.className = "lastWord heading-font";
    lwContainer.className = "desicion-container fadeAnim";
    lwContainer.id = lastWord;
    if (colorTobeShown == "check") {
        createtagI.className = desicion[0];
    }
    else {
        createtagI.className = desicion[1];
    }
    lwContainer.append(createtagI, createSpan);
    wordContainer.appendChild(lwContainer);
    setTimeout((deleteword) => {
        document.getElementById(deleteword).remove();
    }, 1998, lastWord);
}

function randomGenerator(max) {
    console.log(indexGen);
    randomNum = Math.floor(Math.random() * (max));
    if ((indexGen.includes(randomNum)) && (indexGen.length != max)) {
        randomGenerator(max);
    }
    else if (!(indexGen.includes(randomNum)) && (indexGen.length <= max)) {
        indexGen.push(randomNum);
    }
    else {
        if (indexGen.length == max) {
            clearAll(totalSec);
            localStorage.setItem("totalWordsAttended", wordsAttended);
            localStorage.setItem("correctWord", correctWords);
            console.log("hello")
            window.location.href = "gameafterpack.html";
        }
        else {
            randomGenerator(max);
        }
    }
    return randomNum;
}

document.getElementById("plus").addEventListener("click", nextMinute);

//timer
let timerCollection = ["min1", "min130sec", "min2", "min3", "min5"], totalTimings, time = 60, seconds = 60;

function nextMinute() {
    let classThings;
    for (let index = 0; index < 5; index++) {
        classThings = document.getElementById(timerCollection[index]).classList;
        classThings = Object.values(classThings);
        if (!(classThings.includes("none"))) {
            document.getElementById(timerCollection[index]).classList.add("none");
            if (index == 4) {
                index = -1;
            }
            document.getElementById(timerCollection[index + 1]).classList.remove("none");
            time = document.getElementById(timerCollection[index + 1]).getAttribute("data-seconds");
            incdeg = (360 / time);
            break;
        }
    }
}
document.getElementById("minus").addEventListener("click", beforeMinute);
function beforeMinute() {
    let classThings;
    for (let index = 0; index < 5; index++) {
        classThings = document.getElementById(timerCollection[index]).classList;
        classThings = Object.values(classThings);
        if (!(classThings.includes("none"))) {
            document.getElementById(timerCollection[index]).classList.add("none");
            if (index == 0) {
                index = 5;
            }
            document.getElementById(timerCollection[index - 1]).classList.remove("none");
            time = document.getElementById(timerCollection[index - 1]).getAttribute("data-seconds");
            incdeg = (360 / time);
            break;
        }
    }
}

function timer() {
    seconds = time;
    console.log(time);
    incdeg = (360 / seconds);
    deg = 0;
    console.log("hello timer");
    whiteDeg = (360 - deg);
    document.getElementById("timerPrinter").innerText = seconds;
    totalSec = setInterval(function () {
        if (deg < 90) {
            colorCG = "#31ff2d";
        }
        else if(deg<160){
            colorCG="#b0ff2d";
        }
        else if (deg < 240) {
            colorCG = "#fff92d";
        }
        else if (deg < 300) {
            colorCG = "#ffab2d"
        }
        else {
            colorCG = "#ff6c6c";
        }
        seconds--;
        deg += incdeg;
        degtobeget=deg+"deg";
        document.getElementById("timerPrinter").innerText = seconds;
        document.getElementById("gradient-placer").style.backgroundImage  = "conic-gradient("+colorCG+" "+ degtobeget +","+"white 0deg)";
        if (seconds == 0) {
            localStorage.setItem("totalWordsAttended", wordsAttended);
            localStorage.setItem("correctWord", correctWords);
            clearAll(totalSec);
            window.location.href = "gameafterpack.html";
        }
    }, 999)
}

document.getElementById("startGame").addEventListener("click", function () {
    document.getElementById("whole-container").classList.add("none");
    document.getElementById("wholeContainer2").classList.remove("none");
    console.log("click");
    deg = 0;
    correctWords = 0
    wordsAttended = 0
    console.log("start");
    if(playingPack=="quick_play"){ 
        difficultyFinder();
        setQuestionQuick(difficulty);
    }
    else{
        setQuestion();
    }
})

function styleSet(packname) {
    let gradientColor = ["#C71DF7,#E2C97B", "#CB2E5C,#8084C8", "#C1FAA9,#31C46A", "#DC616F,#F67B0C", "#FBAB7E#F7CE68"];
    if (historyPacks.includes(packname)) {
        document.getElementById("bgImage").style.backgroundImage = "linear-gradient(to bottom right," + gradientColor[1] + ")";
        document.getElementById("Play-Word").innerText = "History";
    }
    else if (buisness.includes(packname)) {
        document.getElementById("bgImage").style.backgroundImage = "linear-gradient(to bottom right," + gradientColor[2] + ")";
        document.getElementById("Play-Word").innerText = "Buisness";
    }
    else if (geography.includes(packname)) {
        document.getElementById("bgImage").style.backgroundImage = "linear-gradient(to bottom right," + gradientColor[3] + ")";
        document.getElementById("Play-Word").innerText = "Geography";
    }
    else if (social.includes(packname)) {
        document.getElementById("bgImage").style.backgroundImage = "linear-gradient(to bottom right," + gradientColor[4] + ")";
        document.getElementById("Play-Word").innerText = "Social";
    }
    else {
        document.getElementById("bgImage").style.backgroundImage = "linear-gradient(to bottom right," + gradientColor[0] + ")";
        document.getElementById("Play-Word").innerText = "Original";
    }
}

styleSet(playingPack);

let level = ["easy", "medium", "hard"];
function nextLevel() {
    let classThings;
    for (let index = 0; index < 3; index++) {
        classThings = document.getElementById(level[index]).classList;
        classThings = Object.values(classThings);
        if (!(classThings.includes("none"))) {
            document.getElementById(level[index]).classList.add("none");
            if (index == 2) {
                index = -1;
            }
            document.getElementById(level[index + 1]).classList.remove("none");
            incdeg = (360 / time);
            break;
        }
    }
}

function beforeLevel() {
    let classThings;
    for (let index = 0; index < 3; index++) {
        classThings = document.getElementById(level[index]).classList;
        classThings = Object.values(classThings);
        if (!(classThings.includes("none"))) {
            document.getElementById(level[index]).classList.add("none");
            if (index == 0) {
                index = 3;
            }
            document.getElementById(level[index - 1]).classList.remove("none");
            incdeg = (360 / time);
            break;
        }
    }
}

function clearAll(variable) {
    clearInterval(variable)
}

function quit() {
    incdeg = (360 / time);
    indexGen = [];
    time = 60;
    document.getElementById("whole-container").classList.remove("none");
    document.getElementById("wholeContainer2").classList.add("none");
    clearAll(totalSec);
}

document.getElementById("nextLevel").addEventListener("click", nextLevel);

document.getElementById("beforeLevel").addEventListener("click", beforeLevel);

document.getElementById("startGame").addEventListener("click", () => document.getElementById("answer").focus());

function loginCheck() {
    let userCheck = localStorage.getItem("currentUser");
    if (userCheck != ".") {
        document.getElementById("icon").classList.remove("none");
        document.getElementById("icon").innerText = userCheck[0].toUpperCase();
        document.getElementById("log-inButton").classList.add("none");
    }
    else {
        document.getElementById("log-inButton").classList.remove("none");
        document.getElementById("icon").classList.add("none");
    }
}
loginCheck();
function changeWindow() {
    window.location.href = "loginPage.html";
}
hideContainer();

time = 60;