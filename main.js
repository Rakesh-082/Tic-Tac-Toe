let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset.btn");
let playerText = document.getElementById("playerText");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>{
    turnX = true;
    enableBoxes();
    playerText.innerText = "Tic Tac Toe";
}

// Function to enable boxes and add click event listeners
const enableBoxes = () => {
    for (let box of boxes) {
        box.classList.remove("disabled");
        box.addEventListener("click", boxClickHandler);
        box.innerText = "";
    }
}

// Define the click event listener function
const boxClickHandler = (event) => {
    const box = event.target;
    if (box.innerText === "") {
        box.innerText = turnX ? "X" : "O";
        turnX = !turnX;
        box.classList.add("disabled");
        box.removeEventListener("click", boxClickHandler);
        checkWinner();
    }
};

// Attach the click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", boxClickHandler);
});

const disableBoxes = () =>{
    for (let box of boxes) {
        box.classList.add("disabled")
        box.removeEventListener("click", boxClickHandler);
    }
}

const showWinner = (winner) =>{
    playerText.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes();
    playerText.style.fontSize = "35px";
    playerText.style.textAlign = "center";
}

const checkWinner = () =>{
    for (let patterns of winPatterns) {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return; // Exit the loop if a winner is found
        }
    }
};