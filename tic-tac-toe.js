
window.onload = function(){
    var id = 0;
    var x = true;
    var status = document.getElementById("status");
    var board = document.getElementById("board");
    var boardList = board.querySelectorAll("div");
    var button = document.querySelector("button");




    boardList.forEach( element => {
        element.setAttribute("class", "square");
        //element.setAttribute("id", id);
        //id++;

        console.log(boardList);
    });

};