var restart = document.querySelector('#uusipeli');

var squares = document.querySelectorAll("td");

function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener('click', clearBoard);



function gameChanger(){
  if(this.textContent === "") {
    this.textContent = "X";
  }else if (this.textContent ==="X") {
    this.textContent = "O";
  }else if(this.textContent ==="O"){
    this.textContent = "";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", gameChanger);
}