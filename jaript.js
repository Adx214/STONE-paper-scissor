let user=0;
let computer=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const cscore = document.querySelector("#csc");
const uscore = document.querySelector("#usc");
console.log(choices);


const compChoice = ()=>{
    const opt=["rock", "PAPER", "SCISSOR"];
    const randIdx = Math.floor(Math.random()*3);
    return opt[randIdx]; 
};

const playgame = (choiceId)=>{
    console.log("USER CHOICE WAS",choiceId);
    choicecomp = compChoice();
    console.log("COMPUTER CHOICE WAS",choicecomp);
    if (choiceId===choicecomp) {
        console.log("DRAW GAME");
        msg.innerText = "MATCH DRAW PLaY AGAIN";
        msg.style.backgroundColor = "blue";
    }
    else if (choiceId==="rock") {
        if (choicecomp == "SCISSOR") {
            console.log("You win");
            msg.innerText = "YOU WIN";
            msg.style.backgroundColor = "green";
            user++;
            uscore.innerText = user;
        } 
        else if (choicecomp ==="PAPER") {
            console.log("You lose");
            msg.innerText = "YOU LOSE";
            msg.style.backgroundColor = "red";
            computer++;
            cscore.innerText = computer;
        }
        
    }
    else if (choiceId==="PAPER") {
        if (choicecomp == "SCISSOR") {
            console.log("You lose");
            msg.innerText = "YOU LOSE";
            msg.style.backgroundColor = "red";
            computer++;
            cscore.innerText = computer;
        } 
        else if (choicecomp ==="rock") {
            console.log("You win");
            msg.innerText = "YOU WIN";
            msg.style.backgroundColor = "green";
            user++;
            uscore.innerText = user;  
        }
    }
    else if (choiceId==="SCISSOR") {
        if (choicecomp == "ROCK") {
            console.log("You win");
            msg.innerText = "YOU WIN";
            msg.style.backgroundColor = "green";
            user++;
            uscore.innerText = user;
        } 
        else if (choicecomp ==="PAPER") {
            console.log("You lose");
            msg.innerText = "YOU LOSE";
            msg.style.backgroundColor = "red";
            computer++;
            cscore.innerText = computer;
        }
        
    }

};


choices.forEach((c) => {
    
    c.addEventListener("click", () => {
        const choiceId=c.getAttribute("id");
        playgame(choiceId);
    });
});