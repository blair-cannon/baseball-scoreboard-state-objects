Premise: A Baseball organization wants to build a Baseball Simulator app.



You have been asked to build the scoreboard.

Current Story: Baseball Scoreboard for Wrigley Field

Personas: 
operator of the scoreboard
viewer of the scoreboard

Story:

As a _persona__ I want to _perform_an_action__ so that I can __receive_benefit__.

As a baseball fan I want to see the box score for the game so that I can know who is winning and how the teams are performing.

Definition of Done: See the scoreboard as the viewer in an html page

Acceptance Criteria: 
click the buttons as an operator
View the scoreboard changes
View team names
View field name
Jump into a game, mid-game, not just start from the first pitch

Solution

Pseudocode procedures and functions

Build a component that uses state management to update the Scoreboard’s User Interface

Go Cubs!


Example:


Pseudocode

State

How to name our state object?

var scoreBoard = {};


// properties and methods
scoreBoard.fieldName = “Heinz”; // string
scoreBoard.inningsCompleted = []; // ??
scoreBoard.count = {};
scoreBoard.

START

INIT
	Creating the state obj - scoreBoard
	Check for existing data
		If we have data, populate the scoreBoard
	// assume that we are the operator
	Establish the Click Handlers for the Control Buttons
	Business Logic, Logic
	scoreBoard.init();

Class ScoreBoard (){
	// constructor

	// Properties
	 let strikes = 0; // set it to a default value of 0
	Strikes = [];

	//Methods

	Init (data){
 // when the object is created or needs to be “reset”
if(data == null){
resetStrikes();
resetBalls();
resetOuts();
}
}
	
	addStrike(){
		// What does this method do?
		// increment the strike by one
		// array push
	};
	onStateChange () {
		// ??
		// check for 3 strikes
		// check for 4 balls
		
		if(strikes.length > 2){
			addOut();
			resetBallsStrikes();
}
// check for 3 outs
		// check for a win
}
	addBall();
}

// View
Render the page / scoreboard
Render the field name
Render the initial count
Render the initial box score
Render the initial home or visitor and team names

Render the scoreboard buttons for the operator only
Update Ball (+/-)
Update Strike (+/-)
Update Out (+/-)
Update Score / Runs (+/-)

Reset / Re render
Re render count
Render the home or visitor in bold / colorful 
Re render box score

// Controller

UpdateOuts
Add or remove an out based on input
Once we have 3 outs, 
push total inning score to specific team array
switch to other team
clear out ball, strike, outs
Run CheckInnings function

CheckInnings to global innings count
Compare array length to totalInningsAllowed

Check Win
If tie, increase totalInningsAllowed
If visitor has less runs at the totalInningsAllowed number, home team wins
Else: home team gets to play last inning


// Model
HomeTeamName String
VisitorTeamName String
FieldName String
totalInningsAllowed int = 9
countBall int
countStrike int
countOut int
HomeScore array
VistorScore array



