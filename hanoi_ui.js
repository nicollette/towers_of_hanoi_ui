(function(root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});

	var TowersUI = Hanoi.TowersUI = function() {
		this.game = new Hanoi.Game();
	};

	TowersUI.prototype.render = function() {
		for(var i = 0; i < 3; i++) {
			$('body').append("<div class='tower' id='" + i + "'></div>");
		}
		var disc_ids = ["small", "medium", "large"];
		var disc_heights = ["bottom", "middle", "top"];

		this.game.towers.forEach(function(tower, t_index) {
			tower.forEach(function(disc, d_index) {
				var current_id = disc_ids[disc];
				$('#' + t_index).prepend("<div class='disc' id='" + current_id + "'></div>");
				$('#' + current_id).addClass(disc_heights[d_index]);
			})
		})
	};

	TowersUI.prototype.bindClicks = function() {
		$(".tower").on("click", this.handleTowerClicks.bind(this));
	};

	TowersUI.prototype.handleTowerClicks = function(event) {
		if(this.game.startTowerIdx === null) {
			this.game.startTowerIdx = event.currentTarget.id;
		}
		else {
			this.game.endTowerIdx = event.currentTarget.id;
		}
		this.game.move();
		if (this.game.isWon()) {
			alert("You won!");
			this.gameOverClicks();
		}
	};

	TowersUI.prototype.gameOverClicks = function() {
		$('.tower').off("click");
	}



})(this);

$(document).ready(function() {
	new Hanoi.TowersUI().render();
});