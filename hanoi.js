(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var Game = Hanoi.Game = function () {
    this.towers = [[2, 1, 0], [], []];
		this.startTowerIdx = null;
		this.endTowerIdx = null;
	};

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function () {
    var startTower = this.towers[this.startTowerIdx];
    var endTower = this.towers[this.endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function () {
    if (this.isValidMove()) {
      this.towers[this.endTowerIdx].push(this.towers[this.startTowerIdx].pop());
      this.resetTowerIndices();
			return true;
    } else {
      this.resetTowerIndices();
      return false;
    }
  };

	Game.prototype.resetTowerIndices = function() {
		this.startTowerIdx = null;
		this.endTowerIdx = null;
	}

  // Game.prototype.run = function () {
  //   var game = this;
  //
  //   READER.question("Enter a starting tower: ",function (start) {
  //     var startTowerIdx = parseInt(start);
  //     READER.question("Enter an ending tower: ", function (end) {
  //       var endTowerIdx = parseInt(end);
  //       game.takeTurn(startTowerIdx,endTowerIdx);
  //     });
  //   });
  // };

  // Game.prototype.takeTurn = function (start,end){
  //   var game = this;
  //
  //   if (game.move(start,end)) {
  //     console.log(game.towers);
  //   } else {
  //     console.log("Invalid move!")
  //   }
  //
  //   if (game.isWon()) {
  //     console.log("You win!");
  //     READER.close();
  //   } else {
  //     game.run();
  //   }
  // }
})(this);

// this.Hanoi.Game is a constructor function, so we instantiate a new object, then run it.

// var Game = new this.Hanoi.Game();
// Game.run();
