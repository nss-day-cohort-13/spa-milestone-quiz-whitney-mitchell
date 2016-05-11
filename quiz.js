// Loop over inventory to convert to strings, load inventory,
// and invoke callback function to activate events.

function populatePage(inventory) {
	var carDiv = document.getElementById("carContainer");
	var carString = "";
  for (var i=0; i < inventory.length; i++) {
  	if (i%3 === 0) {
  		carString += "<div class = 'row-fluid row-eq-h'>";
  	}
// Below, border styling in script: ONLY because the user shouldn't
// have to edit the CSS to add a new car into inventory. Which, obviously,
// they also don't currently have the ability to do.
// Works, but I'll research a better way after all requirements are met.
    carString += "<div class='col-sm-4 card' id='card" + i + "' style='border-color: " + inventory[i].color + "'><p class='mainInfo'>" + inventory[i].year + " " + inventory[i].make + " " + inventory[i].model + "</p>";
    carString += "<p class='cPrice'>Price: " + inventory[i].price + "</p>";
    carString += "<p class='cColor'>Color: " + inventory[i].color + "</p>";
    carString += "<p class='cPurchased'>Purchased: " + inventory[i].purchased + "</p>";
    carString += "<p class='cDescription'>Description: " + inventory[i].description + "</p></div>";

  	if (i%3 === 2) {
  		carString += "</div>";
  	}

		carDiv.innerHTML = carString;
	};

// Call function to activate event listeners.
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

