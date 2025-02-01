
let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) { 
        console.log("Game started");
        started = true;
        levelup();
    }
});

function btnFlash(btn) {
    if (btn) { 
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 500);
    } else {
        console.log("btn not find");
    }
}

function userFlash(btn) {
    if (btn) { 
        btn.classList.add("userflash");
        setTimeout(function () {
            btn.classList.remove("userflash");
        }, 500);
    } else {
        console.log("btn not find");
    }
}

function levelup() {
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomindex = Math.floor(Math.random() * 4); // Fixed index range
    let randomcolor = btns[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`);

    // console.log(`Random index: ${randomindex}`);
    // console.log(`Random color: ${randomcolor}`);
    // console.log(`Selected button:`, randombtn);
  gameseq.push(randomcolor);
  console.log(gameseq);
    btnFlash(randombtn);
}

function checkAns(idx){
   // console.log("current level:",level);
   //let idx=level-1;
   if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
       setTimeout(levelup,1000) ;
    }
   }
   else{
    
    h2.innerHTML = `Game over!! your score was <b>${level}</b> <br>press any key to start `;
    document.querySelector("body").style.backgroundcolor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor="white";
    },500)
    reset();
   }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    usercolor=btn.getAttribute ("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
};
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started==false;
    gameseq=[];
    userseq=[];
    level=0;
}


