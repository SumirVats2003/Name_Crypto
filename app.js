console.log("We are a crypto application");

let nm = document.getElementById('name');
let crp = document.getElementById('crypto');
let btn = document.getElementsByClassName("btn")[0];
let textarea = document.getElementById("out");
let para = document.getElementById("para");
let n;
let c;

btn.addEventListener("click", 
function ret() {
	n = nm.value;
	c = Number(crp.value);
	textarea.value = shiftWord(n, c);
	nm.value = "";
	crp.value = "";
	para.innerText = `Output: (${n}, ${c})`;
}
)

const shiftWord = (word, shift) => {
	const arr = Array.from(word);
	const shiftedWord = arr
		.map(letter => {
			return String.fromCharCode(letter.charCodeAt(0) + shift);
		})
		.join("");
	return shiftedWord;
};
