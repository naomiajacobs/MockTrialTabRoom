//logic and pairings that don't depend on user input

//returns new array of all teams that need to be plaintiff for next round (2 or 4)
var needsP = function(round) {
  // since 'teams' is defined in the other file, it might be good to mention that in a comment so it's clear where it's
  // coming from
  // edge-case checking would be good practice here (although not necessary, strictly speaking).
  // If I pass in round 1 or 3, this function should fail or return an error or at least log something
  // Right now, it will silently assume I mean round 4 if I don't pass in round 2
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "d";
    } else {
      return teams.team.rounds.round3.side === "d";
    }
  });
}

// same comments as above
//returns new array of all teams that need to be defense for next round (2 or 4)
var needsD = function(round) {
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "p";
    } else {
      return teams.team.rounds.round3.side === "p";
    }
  });
}

// small nitpick: an object called 'tiebreakers' with properties for round2, round3 etc might be cleaner
// then calls look like tiebreakers.round2, tiebreakers.trophies, etc
var tiebreakersForRound2 = ["runningBallots", "runningPD", "coinFlip"];
var tiebreakersForRounds3and4 = ["runningBallots", "runningCS", "runningPD", "coinFlip"];
var tiebreakersForTrophies = ["runningBallots", "runningCS", "runningOCS", "runningPD", "coinFlip"];

// explain this function in terms of the parameters and the return value
// e.g. sortTeams reorders the teams in teamArray by rank and returns this
// right now it's not clear what breakerArray does (it is once you read the code, but it's good to have it up front)

//for each round's different tiebreakers, returns array of teams reordered by rank to prep for pairings
//issue --> coinflip won't work cause it's supposed to be one coinflip for the whole tournament, and if it's tails, it'll reverse the return values
var sortTeams = function(teamArray, breakerArray) {
  return teamArray.sort(function(a, b) {
    // To use continue, you can just call it (i.e. if (x) { continue; } ). You should not create a variable named 'continue'
    // since 'continue' is a keyword (it would be like naming a variable 'var' or 'if')
    // I don't think you actually need continue here, since you use return
    var continue = true; //allows for loop to break
    for (var i = 0; (i < breakerArray.length) && (continue); i++) {
      var x = a[breakerArray[i]];
      var y = b[breakerArray[i]];
      // this code will never loop. On the first iteration, it will hit this if block and return, which will end the
      // function. If you want to stay in the function but move on with the loop, you can use continue;
      /* e.g.
        while(condition){
           if(x < y){
             return -1;
           }
           else {
             continue;
           }
        }
      */
      if (x < y) {
        continue = false;
        // return automatically ends the function call, so continue is not necessary
        return -1;
      } else if (x > y) {
        continue = false;
        return 1;
        // I think this is where you want 'continue;' instead of 'return 0'
      } else {return 0}
    }
    // now you want return 0; If the loop never finishes, that means everything was equal every step of the way.
    // only once you've gone through the whole loop are you sure that the two teams are equal
  });
}

//returns array split into protected and non-protected brackets [[needsP unprotected], [needsD unprotected], [needsP protected], [needsD protected]]
var protected = function(teamArray1, teamArray2) {}

 //resolves impermissible matches and returns reordered list without impermissibles (recursive?)
var resolve = function(a, b, round) {}

//checks to see if team match is impermissible (from same school or previous opponent)
var check = function(a, b) {
  // the entire 'if' conditional should be captured in a parentheses set
  // e.g. if ((a.school === b.school) || ...){ then...}
  if (a.school === b.school) || ((a.teamNum === b.rounds.round1.oppTeamNum) || ((a.teamNum === b.rounds.round2.oppTeamNum) || (a.teamNum === b.rounds.round3.oppTeamNum))) {
    return false;
  } else {return true;}
}

//returns array of matched teams with all impermissibles resolved
// hard to comment on this without knowing how resolve() is implemented
var match = function(round, teamArray1, teamArray2) {
  if round === "round2" {
    for (var i = 0; i < teamArray1.length; i++) {
      if (!(check(teamArray1[i], teamArray2[i]))) {
        return resolve(teamArray1[i], teamArray2[i], round);
      }
    }
  }
  if round === "round3" {
    for (var i = 0; i < teamArray1.length; i = i + 2) {
      if (!(check(teamArray1[i], teamArray1[i+1]))) {
        return resolve(teamArray1[i], teamArray1[i+1], round);
      }
    }
  }
  if round === "round4" {
    // I'm assuming this is incomplete?
    protected
  }
}
