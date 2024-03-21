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
function changeWindow(){
    window.location.href="loginPage.html";
}
localStorage.setItem("playingPack","quick_play");
let dummy1=localStorage.getItem("clues");
if(dummy1==null){
    let clues={
        quick_play:{
            easy:{
                    0:{
                        grammar:"adjective",
                        sentence:"existing, occurring, or carried on between two or more nations",
                        answer:"international"
                    },
                    1:{
                        grammar:"noun",
                        sentence:"a grey or white mass in the sky, made up of very small floating drops of water",
                        answer:"cloud"
                    },
                    2:{
                        grammar:"noun",
                        sentence:"the anniversary of the day on which a person was born, typically treated as an occasion for celebration and the giving of gifts",
                        answer:"birthday"
                    },
                    3:{
                        grammar:"noun",
                        sentence:"a shelter made of canvas or a similar material and supported by poles and ropes, that you can fold up and carry with you",
                        answer:"tent"
                    },
                    4:{
                        grammar:"noun",
                        sentence:"a separate clause or paragraph of a legal document or agreement, typically one outlining a single rule or regulation.",
                        answer:"article"
                    },
                },
                medium:{
                    0:{
                        grammar:"noun",
                        sentence:"an unpleasant emotion caused by the threat of danger, pain, or harm.",
                        answer:"fear"
                    },
                    1:{
                        grammar:"noun",
                        sentence:"a feeling of revulsion or strong disapproval aroused by something unpleasant or offensive",
                        answer:"disgust",
                    },
                    2:{
                        grammar:"adjective",
                        sentence:"concerned with beauty or the appreciation of beauty:",
                        answer:"aesthetic",
                    },
                    3:{
                        grammar:"adjective",
                        sentence:"the belief that the world is conspiring to do good for you",
                        answer:"pronoid",
                    },
                    4:{
                        grammar:"noun",
                        sentence:"a person or thing that influences another",
                        answer:"influencer",
                },
            },
            hard:{
                0:{
                    grammar:"noun",
                    sentence:"an unpleasant emotion caused by the threat of danger, pain, or harm.",
                    answer:"fear"
                },
                1:{
                    grammar:"noun",
                    sentence:"a feeling of revulsion or strong disapproval aroused by something unpleasant or offensive",
                    answer:"disgust",
                },
                2:{
                    grammar:"adjective",
                    sentence:"concerned with beauty or the appreciation of beauty:",
                    answer:"aesthetic",
                },
                3:{
                    grammar:"adjective",
                    sentence:"the belief that the world is conspiring to do good for you",
                    answer:"pronoid",
                },
                4:{
                    grammar:"noun",
                    sentence:"a person or thing that influences another",
                    answer:"influencer",
            },
            },
        },
        history_of_world:{
            0:{
                grammar:"noun",
                sentence:"the war between british and germany",
                answer:"world war",
            },
            1:{
                grammar:"noun",
                sentence:"1498 british invaded which country",
                answer:"india",
            },
            2:{
                grammar:"noun",
                sentence:"who discovered america",
                answer:"columbus",
            },
            3:{
                grammar:"noun",
                sentence:"which electronic item was first invented in 1822",
                answer:"computer"
            },
            4:{
                grammar:"noun",
                sentence:"in 1526 which empire invded india",
                answer:"mughal",
            },
        },
        english_dictionary:{
            0:{
                grammar:"verb",
                sentence:"calm down and relax.",
                answer:"chillax",
            },
            1:{
                grammar:"verb",
                sentence:"to feel very embarrassed",
                answer:"cringe"
            },
            2:{
                grammar:"adjective",
                sentence:"feeling or expressing distress and annoyance resulting from an inability to change or achieve something.",
                answer:"frustrated",
            },
            3:{
                grammar:"noun",
                sentence:"the quality of being honest and having strong moral principles.",
                answer:"integrity",
            },
            4:{
                grammar:"noun",
                sentence:"a shy, reticent person.",
                answer:"introvert",
            },
            5:{
                grammar:"noun",
                sentence:"the ability to understand and share the feelings of another.",
                answer:"empathy",
            },
            6:{
                grammar:"noun",
                sentence:"an account of someone's life written by someone else.",
                answer:"biography",
            },
            7:{
                grammar:"noun",
                sentence:"preconceived opinion that is not based on reason or actual experience.",
                answer:"prejudice",
            },
            8:{
                grammar:"noun",
                sentence:"the state of being diverse; variety",
                answer:"diversity",
            },
            9:{
                grammar:"noun",
                sentence:"the end or finish of an event, process, or text",
                answer:"conclusion",
            },
        },
        daily_use:{
            0:{
                grammar:"noun",
                sentence:"a paid position of regular employment",
                answer:"job"
            },
            1:{
                grammar:"noun",
                sentence:"a system of communication used by a particular country or community",
                answer:"language"
            },
            2:{
                grammar:"noun",
                sentence:"the natural agent that stimulates sight and makes things visible",
                answer:"light"
            },
            3:{
                grammar:"noun",
                sentence:"understanding of a problem or mystery",
                answer:"enlightenment"
            },
            4:{
                grammar:"noun",
                sentence:"make (something) start burning",
                answer:"ignite"
            },
        },
        buisness_related:{
            0:{
                grammar:"noun",
                sentence:"a person who sets up a business or businesses, taking on financial risks in the hope of profit",
                answer:"enterpreneur"
            },
            1:{
                grammar:"noun",
                sentence:"a financial gain, especially the difference between the amount earned and the amount spent",
                answer:"profit"
            },
            2:{
                grammar:"noun",
                sentence:"a person responsible for controlling or administering an organization or group of staff",
                answer:"manager"
            },
            3:{
                grammar:"noun",
                sentence:"a person employed for wages or salary, especially at non-executive level",
                answer:"employee"
            },
            4:{
                grammar:"noun",
                sentence:"a fixed regular payment",
                answer:"salary"
            }
        }

    };
    localStorage.setItem("clues",JSON.stringify(clues));
    let historyPacks=["history_of_world"];
    localStorage.setItem("history",JSON.stringify(historyPacks));
    let users={
        naveen_babu:{
            0:{
                pack:"history_of_world",
                category:"history",
            },
        }
    };
    let business=["buisness_related"];
    let userLogin={
        naveen_babu:"asd123ASD",
        1:"dummy2",
    }
    localStorage.setItem("userLogin",JSON.stringify(userLogin))
    localStorage.setItem("business",JSON.stringify(business))
    localStorage.setItem("geography","[1]");
    localStorage.setItem("social","[1]");
    localStorage.setItem("users",JSON.stringify(users));
    localStorage.setItem("currentUser",".");
    localStorage.setItem("selectedPack","quick_play");
}
loginCheck();
function disp(){
    document.getElementById("overflow").classList.toggle("none");
}