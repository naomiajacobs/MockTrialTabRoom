//logic and pairings that don't depend on user input
//needs to incorporate bye-buster rules

//returns new array of all teams that need to be plaintiff for next round (2 or 4)
//teams taken from tournData.js file
var needsP = function(round) {
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "d";
    } else if (round === "round4") {
      return teams.team.rounds.round3.side === "d";
    } else {
      //return an error message
    }
  });
}


//returns new array of all teams that need to be defense for next round (2 or 4)
//teams taken from tournData.js file
var needsD = function(round) {
  return teams.filter(function(team) {
    if (round === "round2") {
      return teams.team.rounds.round1.side === "p";
    } else if (round === "round4") {
      return teams.team.rounds.round3.side === "p";
    } else {
      //return an error message
    }
  });
}

//takes an array of teams and an array of tiebreakers and returns the team array sorted by the tiebreakers
//tiebreaker array comes from tiebreakers object in tournData file
//issue --> coinflip won't work cause it's supposed to be one coinflip for the whole tournament, and if it's tails, it'll reverse the return values
//issue --> figure out how to add head to head tie breaker in here; it comes before all the others as long as there are only two teams tied
//add error message for 0 case
var sortTeams = function(teamArray, breakerArray) {
  return teamArray.sort(function(a, b) {
    for (var i = 0; i < breakerArray.length; i++) {
      var x = a[breakerArray[i]];
      var y = b[breakerArray[i]];
      if (x < y) {
        return -1;
      } else if (x > y) {
        return 1;
      }
    }
  });
}

//returns array split into protected and non-protected brackets [[needsP unprotected], [needsD unprotected], [needsP protected], [needsD protected]]
var protected = function(teamArray1, teamArray2) {}

//resolves impermissible matches and returns reordered list without impermissibles (recursive?)
//takes team objects from teams array (in other file), returns ??? reordered array???
//has to include a way to add swapped teams to temporary impermissibles list
var resolveImpermissible = function(a, b, breakers) { }
}

//checks to see if team match is impermissible (from same school or previous opponent), returns true if the match is ok
var checkMatch = function(a, b) {
  a.impermissibles.indexOf(b.teamNum) === -1) ? false : true;
}

//returns array of matched teams with all impermissibles resolved
var match = function(round, teamArray1, teamArray2) {
  if round === "round2" {
    for (var i = 0; i < teamArray1.length; i++) {
      if (!(checkMatch(teamArray1[i], teamArray2[i]))) {
        return function resolveImpermissible(teamArray1[i], teamArray2[i], tiebreakers.round2) {
          //add thing to check if first or last match first
          //create array to temporarily hold results of tiebreakers
          var differences = [];
          //push differences in ballots to find smallest difference
          for (var j = 0; j < tiebreakers.round2.length; j++) {
            var breaker = tiebreakers.round2[j];
            var option1 = Math.abs(teamArray1[i].breaker - teamArray1[i-1].breaker);
            var option2 = Math.abs(teamArray1[i].breaker - teamArray1[i+1].breaker);
            var option3 = Math.abs(teamArray2[i].breaker - teamArray2[i-1].breaker);
            var option4 = Math.abs(teamArray2[i].breaker - teamArray2[i+1].breaker);
            differences.push(option1, option2, option3, option4);
            differences.sort(); //
          }
        }
      }
    }
  }
  //for round 3, teams are sorted without respect to side - find better way of resolving this? might depend on how hard the resolve function is
  //must include the coin flip to determine sides (heads --> odd ranks are p, tails --> even ranks are p)
  if round === "round3" {
    for (var i = 0; i < teamArray1.length; i = i + 2) {
      if (!(check(teamArray1[i], teamArray1[i+1]))) {
        return resolve(teamArray1[i], teamArray1[i+1], round);
      }
    }
  }
  //writing the rules for resolving impermissible matches between the two brackets is gonna be a shitshow for round 4
  if round === "round4" {
    //need to complete this
    protected
  }
}
