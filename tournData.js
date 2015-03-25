//tiebreaker orders
var tiebreakers = {
  "round2": ["runningBallots", "runningPD"];
  "rounds3and4": ["runningBallots", "runningCS", "runningPD"];
  "trophies": ["runningBallots", "runningCS", "runningOCS", "runningPD"];
}

//example team object
var teams = [
  {"1037":
    "school": "Coastal Carolina U",
    "teamNum": 1037,
    "runningBallots": 0,
    "runningCS": 2,
    "runningOCS": 0,
    "runningPD": -35,
    "impermissibles": [xxxx, xxxx, xxxx, xxxx],
    {"rounds":
      {"round1":
        "oppTeamNum": 1139,
        "side": "d",
        "judge1": -29,
        "judge2": -14
      },
      {"round2":
        "oppTeamNum": ,
        "side": ,
        "judge1": ,
        "judge2":  
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2":}
      },
      {"round4":
        "oppTeamNum": ,
        "side": ,
        "judge1": ,
        "judge2": 
      }
    }
  },
  {"1048":
    {"school": "U Alabama Tuscaloosa"},
    {"teamNum": 1048},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1049":
    {"school": "U Alabama Tuscaloosa"},
    {"teamNum": 1049},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1062":
    {"school": "Vanderbilt U"},
    {"teamNum": 1062},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1139":
    {"school": "Duke U"},
    {"teamNum": 1139},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1140":
    {"school": "Duke U"},
    {"teamNum": 1140},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1148":
    {"school": "Florida State U"},
    {"teamNum": 1148},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1164":
    {"school": "Kennesaw State U"},
    {"teamNum": 1164},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1243":
    {"school": "Furman U"},
    {"teamNum": 1243},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1260":
    {"school": "U Georgia"},
    {"teamNum": 1260},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1262":
    {"school": "U Georgia"},
    {"teamNum": 1262},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1332":
    {"school": "Georgia State"},
    {"teamNum": 1332},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1423":
    {"school": "U Florida"},
    {"teamNum": 1423},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1426":
    {"school": "U Florida"},
    {"teamNum": 1426},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1446":
    {"school": "Georgia Tech"},
    {"teamNum": 1446},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1447":
    {"school": "Georgia Tech"},
    {"teamNum": 1447},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1448":
    {"school": "Florida State U"},
    {"teamNum": 1448},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1466":
    {"school": "Samford U"},
    {"teamNum": 1466},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1528":
    {"school": "U Tennessee Chattanooga"},
    {"teamNum": 1528},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1551":
    {"school": "Spelman College"},
    {"teamNum": 1551},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1552":
    {"school": "Spelman College"},
    {"teamNum": 1552},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  },
  {"1627":
    {"school": "U Tennessee Chattanooga"},
    {"teamNum": 1627},
    {"runningBallots": 0},
    {"runningCS": 0},
    {"runningOCS": 0},
    {"runningPD": 0},
    {"rounds":
      {"round1":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round2":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": } 
      },
      {"round3": 
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      },
      {"round4":
        {"oppTeamNum": },
        {"side": },
        {"judge1": },
        {"judge2": }
      }
    }
  }
];
