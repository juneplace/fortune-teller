// JavaScript Document
const messages = [
	"Your future looks bright, keep going!", 
	"Today is not your day. It's totally fine, just take a day off.", 
	"A person you truly trust will betray you. Keep your eyes open.", 
	"Try a new haircut today.", 
	"Tell that special person what you feel.", 
	"This is a great day to stand out at work. Do your best."];





const i = messages.length - 1;

function showFuture(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * i)

// Display the word inside the text box
frm.Showing.value = messages[rnd];

}