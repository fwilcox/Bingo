var buzzwords = new Array ("100% Replace",
	'High 5 AM or PS',
	'Submit to Catalog Dog',
	'Help a Customer',
	'Restock Staging Area',
	'Ask a Team Member for Help',
	'Check Skype for New Msgs',
	'Setup A Cart',
	'Change Label Roll in Printer',
	'Assisting Another Shopper',
	'Wearing Amazon Swag',
	'Communicate Safety Concern',
	'Tidy Staging Area',
	'Help Driver Find a Bag',
	'Shop an Order > 60',
	'Introduce Yourself to New Associate',
	'Shop a 1 Item Order',
	'Todays UPH > Last 30 days',
	'Shop an Item for 1st Time',
	'Take out Trash',
	'Say Hello to 5 WF Team Members',
	'Put a Cart Away',
	'Use Green Bag for Chemical',
	'Help Stage an Order',
	'Use Green Bag for Meat',
	'Get Help from Customer Service',
	'Shop an Order of All Produce',
	'100% Product Found Today',
	'Uncatagorized Item in Order',
	'Order with 2+ Water Gallons',
	'Stage "Bulky" Item Low',
	'Arrive Ontime for Shift',
	'Hydrate During Shift',
	'Take "15" Minute Break',
	'Fill Out Order Handoff Sheet',
	'Read All Acknowledgements',
	'Shop a "Taco Tuesday" Order',
	'Complete Closing Checklist',
	'Birthday Cake in Order',
	'Fill Out Deli Sheet',
	'Stage "Lighter" Item on Top Shelf',
	'Shop Order > 99 Items',
	'Answer Customer in Chat',
	'All Sushi Order',
	'Clean Shopper Cabinet',
	'No Personal Items in Cart',
	'Use Green Bag for Seafood',
	'Found Item after Asking',
	'Use Break Room',
	'Remove Jam from Printer'
	);

var usedWords = new Array(buzzwords.length);
window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onClick = anotherCard;
		newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function newCard() {
	for (var i =0; i < 24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
		do {
			var randomWord = Math.floor(Math.random() * buzzwords.length);
		}
		while (usedWords[randomWord]);

		usedWords[randomWord] = true;
		var currSquare = "square" + thisSquare;
		document.getElementById(currSquare).innerHTML = buzzwords[randomWord];
		document.getElementById(currSquare).className = "";
		document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
	return Math.floor(Math.random() * 15);
}

function anotherCard() {
	for (var i = 1; i < usedNums.length; i++) {
		usedNums[i] = false;
	}

	newCard();
	return false;
}

function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}
	else {
		var thisSquare = window.event.srcElement
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31, 992, 15360, 507904, 541729, 557328,
		1083458, 2162820, 4329736, 8519745, 8659472, 16252928);

	for (var i =0; i < 24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById(currSquare).className != "") {
			document.getElementById(currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2, i);
		}
	}

	for (var i = 0; i < winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
		}
	}

	if (winningOption > -1) {
		for (var i = 0; i < 24; i++) {
			if (winners[winningOption] & Math.pow(2, i)) {
				currSquare = "square" + i;
				document.getElementById(currSquare).className = "winningBG";
			}
		}
	}
}






