/*
1. Create an HTML page that contains a text area and a button labeled Create.
2. When the user enters in text into the text area and then clicks the create button,
create a new card element in the DOM that includes it's own delete button.
	You decide the height/width of the card.
3. When the user clicks the Delete button, the containing card, and no other cards,
should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
*/

console.log("hi there");

//Variables for user input area, create card button, and card area

let inputArea = document.getElementById("input-box");
let createCardBtn = document.getElementById("createbtn");
let cardArea = document.getElementById("cardArea");

//event listener for the create card button 
createCardBtn.addEventListener("click", create);

//function to create the card once create button is clicked
function create() {

	//this is getting the value/actual text that was entered in the input field
	let userinput = inputArea.value;
	//console.log(userinput);

	//creating a div element that will be the card
	newCard = document.createElement("div");

	//writing the user input inside a paragraph tag that will go on the card
	newCard.innerHTML = `<p id="style">${userinput}</p>`;
	//console.log(newCard);
	// newCard.append(userinput);

	//attaching the newly created card to the card area
	cardArea.append(newCard);

	//creating the delete button that will go on each card
	let deletebtn = document.createElement("button");
	//creating the text that will appear on the button: DELETE
	let deletebtnTxt = document.createTextNode("Delete");
	//adding the delete text to the button
	deletebtn.append(deletebtnTxt);
	//attaching the delete button to the newly created card
	newCard.append(deletebtn);

	//event listener for the delete button on each card
	//will run the removeCard function once the delete btn is clicked
	deletebtn.addEventListener("click", removeCard);

	//targeting card and removing it from the card area
	function removeCard() {
		let card = this.parentNode;
		cardArea.removeChild(card);
	};
	
};
