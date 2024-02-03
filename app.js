let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>  {
       if(turnO){
        box.innerHTML = "X";
        turnO = false;
       }
       else{
        box.innerHTML = "O"
        turnO = true
       }
       box.disabled = true;
       checkWinner();
    });
});

let enabled = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = ""
        
    }
}

let disabled = () =>{
    for (let box of boxes) {
        box.disabled = true;
        
    }
}

let showWinner = (winner) => {
    msg.innerHTML = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabled();
}

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val != "" && pos2val != "" && pos3val != "") {          
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner" + pos1val)
                showWinner(pos1val);
            }
        }
    }
}
let resetGame = () => {
    turnO = true;
    enabled();
    msgContainer.classList.add("hide")
}
newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)