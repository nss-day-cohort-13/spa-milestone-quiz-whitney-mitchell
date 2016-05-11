var CarLot = (function(origCarLot) {
		var cardClick = document.getElementsByClassName('card');
		var textBox = document.getElementById('textInput');

	origCarLot.activateEvents = function() {
		for (var i = 0; i < cardClick.length; i++) {
			cardClick[i].addEventListener("click", CarLot.toggleCard);
		}
		textBox.addEventListener("keyup", CarLot.changeDescrip);
	};
	return origCarLot;
})(CarLot || {});

