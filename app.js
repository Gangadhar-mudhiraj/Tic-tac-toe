let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-data");
let h2 = document.querySelector("h2");

let turnO = true;
let turnX = false;

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "X";
    } else {
      box.innerHTML = "O";
    }
    box.disabled = true;
    turnO = !turnO;
    checkWinner();
  });
});

reset.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
});
const checkWinner = () => {
  for (let pattern of arr) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;
    // if (p1 === "") {
    //   console.log("succes");
    // }
    if (p1 != "" && p2 != "" && p3 != "" && p1 === p2 && p1 === p3) {
      if (turnO) {
        h2.innerHTML = "player2 Won the match";
      } else {
        h2.innerHTML = "player1 Won the match";
      }
      h2.style.display = "inline";
      boxes.forEach((box) => {
        // box.innerHTML = "";
        box.disabled = true;
      });
    }
  }
};
