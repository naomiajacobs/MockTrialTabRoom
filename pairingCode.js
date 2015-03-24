var needsP = function(round) {
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "d";
    } else {
      return teams.team.rounds.round3.side === "d";
    }
  });
}

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

 //reorders list (recursive?)
var resolve = function(a, b, round) {}

//checks to see if team match is impermissible
var check = function(a, b) {
  if (a.school === b.school) || ((a.teamNum === b.rounds.round1.oppTeamNum) || ((a.teamNum === b.rounds.round2.oppTeamNum) || (a.teamNum === b.rounds.round3.oppTeamNum))) {
    return false;
  } else {return true;}
}

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
