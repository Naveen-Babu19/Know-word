let selectedPack=(localStorage.getItem("selectedPack")).split(" ").join("_"),clues=JSON.parse(localStorage.getItem("clues")),nextWord;
if(clues.hasOwnProperty(selectedPack)){
    nextWord=Object.keys(clues[selectedPack]);
}
else{
    clues[selectedPack]={};
    nextWord=[];
}
console.log(selectedPack);
function createWord(){
    let answer=document.getElementById("answer").value,
    sentence=document.getElementById("sentence").value,
    grammar=document.getElementById("grammar").value;
    console.log(answer+" "+sentence)
    if((answer!="")&&(sentence!="")){
        clues[selectedPack][nextWord.length]={};
        clues[selectedPack][nextWord.length].grammar=grammar;
        clues[selectedPack][nextWord.length].sentence=sentence;
        clues[selectedPack][nextWord.length].answer=answer;
        console.log(clues);
        localStorage.setItem("clues",JSON.stringify(clues));
        window.location.href="profilePage.html";
    }
    else{
        console.log("not working");
    }
}

function cancel(){
    window.location.href="profilePage.html";
}