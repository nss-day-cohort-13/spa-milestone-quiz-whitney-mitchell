var CarLot = (function (toggle){
// On click, calls toggleReset, then applies the gray class to the
// clicked card, widening the border and changing the card's
// background-color. Also clears text input and places cursor there.
		toggle.toggleCard = function (event, gray) {
			toggle.toggleReset();
			var textBox = document.getElementById('textInput');
			var thisCard = event.currentTarget;
			if (thisCard.tagName.toLowerCase() === "div") {
					thisCard.classList.toggle("gray");
					textBox.value = "";
					textBox.focus();
					console.log(thisCard.value);
					return thisCard;
					return textBox;
			}
		}

// Loops through cards, removing the gray class
// (so that only one card receives visual focus at a time.
		toggle.toggleReset = function () {
			var clearCard = document.getElementsByClassName("card");
			console.log(clearCard);
			for (var i = 0; i < clearCard.length; i++) {
				clearCard[i].classList.remove("gray");
				console.log(clearCard[i]);
			}
		}

	return toggle;
})(CarLot || {});


					// console.log(event.currentTarget.lastElementChild);


