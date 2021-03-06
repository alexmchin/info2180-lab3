
window.onload = function(){
    var id = 0;
    var gameActive = true;
    //var currentPlayer = "X";
    var status = document.getElementById("status");
    var board = document.getElementById("board");
    var boardList = board.querySelectorAll("div");
    var button = document.querySelector("button");
    let currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];


    const winCon = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /*
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    //status.innerHTML = currentPlayerTurn();


    function handleCellPlayed(clickedCell, clickedCellIndex) {
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.innerHTML = currentPlayerTurn();
    }

    function handleCellClick(clickedCellEvent) {
        const clickedCell = clickedCellEvent.target;
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));
    
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
    
        console.log(boardList);
        //handleCellPlayed(clickedCell, clickedCellIndex);
        //handleResultValidation();
    }
    */


    boardList.forEach( space => {
        //space.onmouseover(hover);
        space.setAttribute("class", "square");
        space.setAttribute("id", id);
        id++;

        console.log(boardList);


        space.addEventListener("click", clicked =>{

            if(currentPlayer == "X" && !space.classList.contains("X") && !space.classList.contains("O")){
                space.textContent = currentPlayer;
                space.classList.add(currentPlayer);
                currentPlayer= "O";
            }

            if(currentPlayer == "O" && !space.classList.contains("X") && !space.classList.contains("O")){
                space.textContent = currentPlayer;
                space.classList.add(currentPlayer);
                currentPlayer= "X";
            }
        });

        space.addEventListener("mouseover", function(event){
            if(!space.classList.contains("X") && !space.classList.contains("O")){
                event.target.classList.add("hover");
            }
        });

        space.addEventListener("mouseout", function(event){
            event.target.classList.remove("hover");
        });

    });

    button.addEventListener("click", clicked =>{
        //document.querySelectorAll('.space').forEach(space => space.innerHTML = "");
        board.querySelectorAll('div').forEach(space=> space.innerHTML = "");
        currentPlayer= "X";
    });

    
};