var squares = document.querySelectorAll('td');
for (square of squares) {
    square.addEventListener('click', function() {
        var cell = this.textContent;
        if (cell === "X") {
            cell = "O";
        }
        else if (cell === "O") {
            cell = "";
        }
        else {
            cell = "X";
        }
        this.textContent = cell;
    });
}

var restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener('click', function() {
    for (square of squares) {
        square.textContent = "";
    }
});
