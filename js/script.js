let player1 = "";
let player2 = "";

let ticTacToe = angular.module("TicTacToe", ["ngRoute"]);

ticTacToe.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: "start.html",
            controller: "StartController"
        });
}]);

ticTacToe.controller("StartController", function ($scope) {

    $scope.btnValue = "PLAY";

    $scope.btnFunction = () => {

        if ($scope.btnValue === "PLAY") {
            $scope.btnValue = "START";
            $scope.showInputFields = true;
            return;
        }


        if ($scope.btnValue === "START") {

            player1 = $scope.p1;
            player2 = $scope.p2;
            $scope.errorMessageP1 = "Player X Name required";
            $scope.errorMessageP2 = "Player O Name required";

            if (player1.length > 0 && player2.length > 0) {
                $scope.hideStartButton = true;
                $scope.showInputFields = false;
                $scope.shoeBoxVisibility = true;
                document.getElementById("player1Highlight").style.color = "red"
                return;
            }


        }
    }

});

ticTacToe.controller("boardCtrl", function ($scope) {
    const cellArray = document.querySelectorAll("[data-cell]");
    var playerO = 'O';
    var playerX = 'X';
    let gamestatus = true;
    function startgame() {

        gamestatus = true;
        var currentPlayer = playerO;


        cellArray.forEach(cell => {

            cell.addEventListener("click", handleClick, { once: true })

        })



        function handleClick(e) {
            if (gamestatus) {
                const currentCell = e.target;

                if (currentPlayer === playerO) {
                    currentPlayer = playerX;

                    document.getElementById("player1Highlight").style.color = "black"
                    document.getElementById("player2Highlight").style.color = "red"

                } else {
                    currentPlayer = playerO;
                    document.getElementById("player2Highlight").style.color = "black"
                    document.getElementById("player1Highlight").style.color = "red"
                }

                currentCell.innerText = currentPlayer;

                if ((cellArray[0].innerText != "") && (cellArray[0].innerText == cellArray[1].innerText) && (cellArray[1].innerText == cellArray[2].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[3].innerText != "") && (cellArray[3].innerText == cellArray[4].innerText) && (cellArray[4].innerText == cellArray[5].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[6].innerText != "") && (cellArray[6].innerText == cellArray[7].innerText) && (cellArray[7].innerText == cellArray[8].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[0].innerText != "") && (cellArray[0].innerText == cellArray[3].innerText) && (cellArray[3].innerText == cellArray[6].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[1].innerText != "") && (cellArray[1].innerText == cellArray[4].innerText) && (cellArray[4].innerText == cellArray[7].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[2].innerText != "") && (cellArray[2].innerText == cellArray[5].innerText) && (cellArray[5].innerText == cellArray[8].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[0].innerText != "") && (cellArray[4].innerText == cellArray[0].innerText) && (cellArray[4].innerText == cellArray[8].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                } else if ((cellArray[2].innerText != "") && (cellArray[2].innerText == cellArray[4].innerText) && (cellArray[4].innerText == cellArray[6].innerText)) {
                    setTimeout(function () { alert("Its a win, Please press the play again button or refresh the...!") }, 500);
                    gamestatus = false;
                }

            }}
            }


            startgame();

            $scope.playAgain = () => {
                cellArray.forEach(cell => {
                    cell.innerText = "";
                    document.getElementById("player1Highlight").style.color = "red"
                    document.getElementById("player2Highlight").style.color = "black"
                    startgame();
                })
            }

        });


