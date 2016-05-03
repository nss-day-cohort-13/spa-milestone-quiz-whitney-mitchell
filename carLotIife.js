// Main IIFE, returns inventory through the function, keeping it private.

var CarLot = (function() {
	var inventory = [];

	return {
		getInventory: function() {
			return inventory;
		},
//Getter above, returns array inventory
//Setter below, calls json object, assigns the data to inventory.
		loadInventory: function(callback) {
			var invRequest = new XMLHttpRequest();

			invRequest.open("GET", "inventory.json");
			invRequest.send();
			invRequest.addEventListener("load", function() {
				inventory = JSON.parse(this.responseText).cars;
				callback(inventory);
//Above, callback inventory, pass it all car info.
	// console.log(inventory);

			});
		}
	}
})();

	// var contain = document.getElementByClassName('container').value;
	// var input = document.getElementById('inputString');
	// var buttonSubmit = document.getElementById('submitButton');
