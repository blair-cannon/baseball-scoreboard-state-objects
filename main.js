// main.js

//START

//INIT


scoreBoard.data = "";

function init(){
    console.log("hello world!");
}

class ScoreBoard {
    //PROPERTIES

    constructor() {
        this.fieldName = "Wrigley Field";
        this.data = []; // sent to us via the API
        this.balls = 0;
        this.strikes = 0;
        this.outs = 0;
        this.innings = [];
        this.runs = 0;
    }
    addBall() {
        this.balls++;
    }

    addStrike() {
        this.strikes++;
    }

    addOut() {
        this.outs++;
    }

    addInning(score) {
        this.innings.push(score);
    }

    addRuns() {
        this.runs++;
    }
}

//create the state obj: score board
let scoreBoard = new ScoreBoard();
