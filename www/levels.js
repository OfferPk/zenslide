/**
 * ZenSlide Level Packs
 * Auto-generated & BFS verified for optimal shortest-path solutions.
 */

const ZENSLIDE_PACKS = [
  {
    "id": "starter",
    "name": "Starter",
    "color": "#34C759",
    "levelCount": 10
  },
  {
    "id": "classic",
    "name": "Classic",
    "color": "#007AFF",
    "levelCount": 10
  },
  {
    "id": "challenger",
    "name": "Challenger",
    "color": "#FF9500",
    "levelCount": 10
  },
  {
    "id": "master",
    "name": "Master",
    "color": "#AF52DE",
    "levelCount": 10
  }
];

const ZENSLIDE_LEVELS = {
  "starter": [
    {
      "id": "starter-1",
      "packId": "starter",
      "name": "Starter — Level 1",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 2,
          "c": 2,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "b6",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "starter-2",
      "packId": "starter",
      "name": "Starter — Level 2",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 4,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 0,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 2,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b3",
          "delta": 2
        },
        {
          "blockId": "b4",
          "delta": -2
        },
        {
          "blockId": "b6",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "starter-3",
      "packId": "starter",
      "name": "Starter — Level 3",
      "minMoves": 5,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b4",
          "delta": -4
        },
        {
          "blockId": "b2",
          "delta": -1
        },
        {
          "blockId": "b3",
          "delta": -1
        },
        {
          "blockId": "b6",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-4",
      "packId": "starter",
      "name": "Starter — Level 4",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 1,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 5,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "b6",
          "delta": -2
        },
        {
          "blockId": "b4",
          "delta": 2
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-5",
      "packId": "starter",
      "name": "Starter — Level 5",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-6",
      "packId": "starter",
      "name": "Starter — Level 6",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-7",
      "packId": "starter",
      "name": "Starter — Level 7",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-8",
      "packId": "starter",
      "name": "Starter — Level 8",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-9",
      "packId": "starter",
      "name": "Starter — Level 9",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "starter-10",
      "packId": "starter",
      "name": "Starter — Level 10",
      "minMoves": 6,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 5,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 1,
          "c": 0,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 2,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -1
        },
        {
          "blockId": "b5",
          "delta": -1
        },
        {
          "blockId": "b4",
          "delta": -1
        },
        {
          "blockId": "b1",
          "delta": -3
        },
        {
          "blockId": "b6",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    }
  ],
  "classic": [
    {
      "id": "classic-1",
      "packId": "classic",
      "name": "Classic — Level 1",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "classic-2",
      "packId": "classic",
      "name": "Classic — Level 2",
      "minMoves": 5,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 0,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 1,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b4",
          "delta": -1
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "b8",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "classic-3",
      "packId": "classic",
      "name": "Classic — Level 3",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "classic-4",
      "packId": "classic",
      "name": "Classic — Level 4",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "classic-5",
      "packId": "classic",
      "name": "Classic — Level 5",
      "minMoves": 6,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b5",
          "delta": -1
        },
        {
          "blockId": "b1",
          "delta": 1
        },
        {
          "blockId": "b3",
          "delta": -2
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "b8",
          "delta": 2
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "classic-6",
      "packId": "classic",
      "name": "Classic — Level 6",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 2,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b4",
          "delta": -1
        },
        {
          "blockId": "b1",
          "delta": -2
        },
        {
          "blockId": "b8",
          "delta": -2
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "classic-7",
      "packId": "classic",
      "name": "Classic — Level 7",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 5,
          "c": 2,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 2,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b1",
          "delta": 1
        },
        {
          "blockId": "b8",
          "delta": -1
        },
        {
          "blockId": "b7",
          "delta": 2
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "classic-8",
      "packId": "classic",
      "name": "Classic — Level 8",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 5,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b6",
          "delta": -2
        },
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "b7",
          "delta": -2
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "classic-9",
      "packId": "classic",
      "name": "Classic — Level 9",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 1,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 5,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 2,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 2,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 0,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "b3",
          "delta": -1
        },
        {
          "blockId": "b6",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "classic-10",
      "packId": "classic",
      "name": "Classic — Level 10",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 1,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b3",
          "delta": -1
        },
        {
          "blockId": "b6",
          "delta": -1
        },
        {
          "blockId": "b8",
          "delta": -2
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    }
  ],
  "challenger": [
    {
      "id": "challenger-1",
      "packId": "challenger",
      "name": "Challenger — Level 1",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 5,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 2,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 4,
          "c": 0,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 5,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 0,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b1",
          "delta": -1
        },
        {
          "blockId": "b3",
          "delta": -1
        },
        {
          "blockId": "b4",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "challenger-2",
      "packId": "challenger",
      "name": "Challenger — Level 2",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 1,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 2,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 5,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b8",
          "delta": -2
        },
        {
          "blockId": "b4",
          "delta": 1
        },
        {
          "blockId": "b9",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "challenger-3",
      "packId": "challenger",
      "name": "Challenger — Level 3",
      "minMoves": 5,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 2,
          "c": 2,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 1,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 5,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 0,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 1,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b3",
          "delta": 1
        },
        {
          "blockId": "b5",
          "delta": 1
        },
        {
          "blockId": "b8",
          "delta": -2
        },
        {
          "blockId": "b9",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "challenger-4",
      "packId": "challenger",
      "name": "Challenger — Level 4",
      "minMoves": 5,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 1,
          "c": 0,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 5,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 4,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b6",
          "delta": -2
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "b4",
          "delta": -1
        },
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "challenger-5",
      "packId": "challenger",
      "name": "Challenger — Level 5",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "challenger-6",
      "packId": "challenger",
      "name": "Challenger — Level 6",
      "minMoves": 6,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 1,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 0,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 3,
          "c": 1,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b1",
          "delta": -1
        },
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "b4",
          "delta": -1
        },
        {
          "blockId": "b6",
          "delta": -1
        },
        {
          "blockId": "b9",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "challenger-7",
      "packId": "challenger",
      "name": "Challenger — Level 7",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 2,
          "c": 0,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 1,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 1,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 5,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b4",
          "delta": -2
        },
        {
          "blockId": "b2",
          "delta": -1
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "challenger-8",
      "packId": "challenger",
      "name": "Challenger — Level 8",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 1,
          "c": 2,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 2,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b9",
          "delta": 1
        },
        {
          "blockId": "b6",
          "delta": -2
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "challenger-9",
      "packId": "challenger",
      "name": "Challenger — Level 9",
      "minMoves": 6,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 1,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 5,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -1
        },
        {
          "blockId": "b5",
          "delta": -2
        },
        {
          "blockId": "b8",
          "delta": -3
        },
        {
          "blockId": "b9",
          "delta": -2
        },
        {
          "blockId": "b4",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "challenger-10",
      "packId": "challenger",
      "name": "Challenger — Level 10",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    }
  ],
  "master": [
    {
      "id": "master-1",
      "packId": "master",
      "name": "Master — Level 1",
      "minMoves": 6,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 2,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 1,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 0,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "key",
          "delta": 2
        },
        {
          "blockId": "b6",
          "delta": -1
        },
        {
          "blockId": "b8",
          "delta": -1
        },
        {
          "blockId": "b3",
          "delta": -2
        },
        {
          "blockId": "b5",
          "delta": 1
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "master-2",
      "packId": "master",
      "name": "Master — Level 2",
      "minMoves": 9,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 4,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 5,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 0,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 0,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 1,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "key",
          "delta": -1
        },
        {
          "blockId": "b5",
          "delta": 1
        },
        {
          "blockId": "b7",
          "delta": 2
        },
        {
          "blockId": "b3",
          "delta": -4
        },
        {
          "blockId": "b1",
          "delta": -1
        },
        {
          "blockId": "b6",
          "delta": 3
        },
        {
          "blockId": "b5",
          "delta": 1
        },
        {
          "blockId": "b10",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "master-3",
      "packId": "master",
      "name": "Master — Level 3",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "master-4",
      "packId": "master",
      "name": "Master — Level 4",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "master-5",
      "packId": "master",
      "name": "Master — Level 5",
      "minMoves": 10,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 1,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 5,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 3,
          "c": 0,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 4,
          "c": 4,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 2,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 5,
          "c": 1,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 4,
          "c": 1,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b5",
          "delta": -1
        },
        {
          "blockId": "b1",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 1
        },
        {
          "blockId": "b3",
          "delta": -2
        },
        {
          "blockId": "b7",
          "delta": -2
        },
        {
          "blockId": "b8",
          "delta": -1
        },
        {
          "blockId": "b9",
          "delta": -1
        },
        {
          "blockId": "b10",
          "delta": -1
        },
        {
          "blockId": "b4",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "master-6",
      "packId": "master",
      "name": "Master — Level 6",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 4,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 3,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 0,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b9",
          "delta": -1
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "b10",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 2
        }
      ]
    },
    {
      "id": "master-7",
      "packId": "master",
      "name": "Master — Level 7",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 4,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 0,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 2,
          "c": 2,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 4,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 5,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 1,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 1,
          "c": 4,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 3,
          "c": 3,
          "len": 3,
          "dir": "H",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 0,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b5",
          "delta": 1
        },
        {
          "blockId": "b3",
          "delta": 1
        },
        {
          "blockId": "b7",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    },
    {
      "id": "master-8",
      "packId": "master",
      "name": "Master — Level 8",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "master-9",
      "packId": "master",
      "name": "Master — Level 9",
      "minMoves": 3,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 1,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 0,
          "c": 3,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 3,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 4,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b2",
          "delta": -2
        },
        {
          "blockId": "b1",
          "delta": 3
        },
        {
          "blockId": "key",
          "delta": 3
        }
      ]
    },
    {
      "id": "master-10",
      "packId": "master",
      "name": "Master — Level 10",
      "minMoves": 4,
      "blocks": [
        {
          "id": "key",
          "r": 2,
          "c": 0,
          "len": 2,
          "dir": "H",
          "isKey": true,
          "color": "#FF3B30"
        },
        {
          "id": "b1",
          "r": 3,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#00C7BE"
        },
        {
          "id": "b2",
          "r": 4,
          "c": 3,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#34C759"
        },
        {
          "id": "b3",
          "r": 1,
          "c": 5,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF9500"
        },
        {
          "id": "b4",
          "r": 3,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#AF52DE"
        },
        {
          "id": "b5",
          "r": 0,
          "c": 1,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#007AFF"
        },
        {
          "id": "b6",
          "r": 3,
          "c": 0,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FF2D55"
        },
        {
          "id": "b7",
          "r": 0,
          "c": 2,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#5856D6"
        },
        {
          "id": "b8",
          "r": 1,
          "c": 2,
          "len": 2,
          "dir": "V",
          "isKey": false,
          "color": "#FFCC00"
        },
        {
          "id": "b9",
          "r": 3,
          "c": 5,
          "len": 3,
          "dir": "V",
          "isKey": false,
          "color": "#30B0C7"
        },
        {
          "id": "b10",
          "r": 1,
          "c": 3,
          "len": 2,
          "dir": "H",
          "isKey": false,
          "color": "#32ADE6"
        }
      ],
      "optimalSolution": [
        {
          "blockId": "b3",
          "delta": -1
        },
        {
          "blockId": "b7",
          "delta": 1
        },
        {
          "blockId": "b8",
          "delta": -1
        },
        {
          "blockId": "key",
          "delta": 4
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ZENSLIDE_PACKS,
    ZENSLIDE_LEVELS
  };
}
if (typeof window !== 'undefined') {
  window.ZenSlideLevels = {
    ZENSLIDE_PACKS,
    ZENSLIDE_LEVELS
  };
}
