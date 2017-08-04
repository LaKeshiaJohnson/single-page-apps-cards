/*
1. Create an HTML page that contains a text area and a button labeled Create.
2. When the user enters in text into the text area and then clicks the create button,
create a new card element in the DOM that includes it's own delete button.
	You decide the height/width of the card.
3. When the user clicks the Delete button, the containing card, and no other cards,
should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
*/

console.log("hi there");

let inputArea = document.getElementById("input-box");
let createCardBtn = document.getElementById("createbtn");
let cardArea = document.getElementById("cardArea");

createCardBtn.addEventListener("click", create);

function create() {
	let userinput = inputArea.value;
	//console.log(userinput);
	//document.getElementById("cardArea").innerHTML = cardArea;
	newCard = document.createElement("div");
	newCard.innerHTML = `<p>${userinput}</p>`;
	console.log(newCard);
	//newCard.append(userinput);
	cardArea.appendChild(newCard);

	let deletebtn = document.createElement("BUTTON");
	let deletebtnTxt = document.createTextNode("DELETE");
	deletebtn.appendChild(deletebtnTxt);
	newCard.appendChild(deletebtn);


	deletebtn.addEventListener("click", removeCard);

	function removeCard() {
		let card = this.parentNode;
		cardArea.removeChild(card);
	};
	
};

/*deletebtn.addEventListener("click", removeCard);

function removeCard() {
	let card = this.parentNode;
	cardArea.removeChild(card);
};
*/