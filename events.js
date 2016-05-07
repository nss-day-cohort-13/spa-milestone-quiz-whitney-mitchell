var CarLot = (function (origCarLot) {
	origCarLot.activateEvents = function () {
		var prevCard = null;
		var carCon = document.getElementById('carContainer');
		var textBox = document.getElementById('textInput');
		carCon.addEventListener("click", function(event) {
			console.log(event);
		});
	};
	return origCarLot;
}(CarLot || {}));
