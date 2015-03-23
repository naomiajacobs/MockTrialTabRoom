# MockTrialTabRoom
//Pairing system for mock trial

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

//example team object
var teams = [
  {"1091":
    {"school": "UChicago"},
    {"teamNum": "1091"},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": "1234"},
        {"side": "p"},
        {"judge1":
          {"score": 9},
          {"awards":
            {"atty":
              {"naomiJacobs": 3},
              {"reedMolbak": 4},
              {"thomasChapman": 5}
            },
            {"witness":
              {"maryiamSaifuddin": 5},
              {"griffinBrunk": 4}
            }
          }
        },
        {"judge2":
          {"score": 1},
          {"awards":
            {"atty":
              {"naomiJacobs": 3},
              {"reedMolbak": 4},
              {"thomasChapman": 5}
            },
            {"witness":
              {"maryiamSaifuddin": 5},
              {"griffinBrunk": 4}
            }
          }
        }
        {"judge3":
          {"score": 9},
          {"awards":
            {"atty":
              {"naomiJacobs": 3},
              {"reedMolbak": 4},
              {"thomasChapman": 5}
            },
            {"witness":
              {"maryiamSaifuddin": 5},
              {"griffinBrunk": 4}
            }
          }
        }
      },
      {"round2": {}},
      {"round3": {}},
      {"round4": {}}
    },
    {"awards":
      {"naomiJacobs":
        {"atty":
          {"round1":
            {"judge1": 5},
            {"judge2": 4},
            {"judge3": 4},
            {"side": "p"}
          },
          {"round2":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "d"}
          },
          {"round3":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "p"}
          },
          {"round4":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "d"}
          }
        },
        {"witness":
          {"round1":
            {"judge1": 5},
            {"judge2": 4},
            {"judge3": 4},
            {"side": "p"}
          },
          {"round2":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "d"}
          },
          {"round3":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "p"}
          },
          {"round4":
            {"judge1": 0},
            {"judge2": 0},
            {"judge3": 0},
            {"side": "d"}
          }
        }
      },
      {"reedMolbak": {}},
      {"thomasChapman": {}},
      {"maryiamSaifuddin": {}},
      {"griffinBrunk": {}},
      {"alyssaMallory": {}},
    }
  }
];
