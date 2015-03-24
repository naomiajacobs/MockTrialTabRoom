//logic and pairings that don't depend on user input

//returns new array of all teams that need to be plaintiff for next round (2 or 4)
var needsP = function(round) {
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "d";
    } else {
      return teams.team.rounds.round3.side === "d";
    }
  });
}


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

var tiebreakersForRound2 = ["runningBallots", "runningPD", "coinFlip"];
var tiebreakersForRounds3and4 = ["runningBallots", "runningCS", "runningPD", "coinFlip"];
var tiebreakersForTrophies = ["runningBallots", "runningCS", "runningOCS", "runningPD", "coinFlip"];

//for each round's different tiebreakers, returns array of teams reordered by rank to prep for pairings
var sortTeams = function(teamArray, breakerArray) {
  return teamArray.sort(function(a, b) {
    var continue = true; //allows for loop to break
    for (var i = 0; (i < breakerArray.length) && (continue); i++) {
      var x = a[breakerArray[i]];
      var y = b[breakerArray[i]];
      if (x < y) {
        continue = false;
        return -1;
      } else if (x > y) {
        continue = false;
        return 1;
      } else {return 0}
    }
  });
}

//returns array split into protected and non-protected brackets [[needsP unprotected], [needsD unprotected], [needsP protected], [needsD protected]]
var protected = function(teamArray1, teamArray2) {}

 //resolves impermissible matches and returns reordered list without impermissibles (recursive?)
var resolve = function(a, b, round) {}

//checks to see if team match is impermissible (from same school or previous opponent)
var check = function(a, b) {
  if (a.school === b.school) || ((a.teamNum === b.rounds.round1.oppTeamNum) || ((a.teamNum === b.rounds.round2.oppTeamNum) || (a.teamNum === b.rounds.round3.oppTeamNum))) {
    return false;
  } else {return true;}
}

//returns array of matched teams with all impermissibles resolved
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
    protected
  }
}
