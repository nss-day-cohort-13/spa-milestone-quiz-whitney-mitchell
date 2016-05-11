var CarLot = (function (origCarLot) {
		var cardClick = document.getElementsByClassName('card');
		var textBox = document.getElementById('textInput');
		// var thisCard = null;

	origCarLot.activateEvents = function () {
		for (var i = 0; i < cardClick.length; i++) {
			console.log(cardClick[i]);
			cardClick[i].addEventListener("click", CarLot.toggleCard);
		}





		// 		thisCard = event.target.parentNode;
		// 		console.log("card", thisCard);
		// 		var prevCard = thisCard;


		// })
// console.log(thisCard);
	};

	return origCarLot;
})(CarLot || {});

