(function(root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});

	var TowersUI = Hanoi.TowersUI = function() {
		this.towers = [[2, 1, 0], [], []];
	};

	TowersUI.prototype.render = function() {
		for(var i = 0; i < 3; i++) {
			$('body').append("<div class='tower' id='" + i + "'></div>");
		}
		var disc_ids = ["small", "medium", "large"];
		var disc_heights = ["bottom", "middle", "top"];

		this.towers.forEach(function(tower, t_index) {
			tower.forEach(function(disc, d_index) {
				var current_id = disc_ids[disc];
				$('#' + t_index).prepend("<div class='disc' id='" + current_id + "'></div>");
				$('#' + current_id).addClass(disc_heights[d_index]);
			})
		})
	};

	TowersUI.prototype.bindTowerClicks = function() {

	};



})(this);

$(document).ready(function() {
	new Hanoi.TowersUI().render();
});