// String compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string "aabcccccaaa" would become "a2b1c5a3". If the
// "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z)
// Analizar el largo del string.
// Setear contador y output.
// Evaluar el anterior contra el siguiente y ver si son iguales, en caso de ser iguales el contador de ese elemento incrementa en 1.
// Si son distintos el contador no incrementa, concatena el elemento con el contador y retorna el contador a 1.

// IIFE
// const compressor = ((string) => {
// 	let output = "";
// 	let counter = 1;

// 	for (let i = 0; i < string.length; i++) {
// 		let currentLetter = string[i];
// 		let nextLetter = string[i + 1];
// 		if (currentLetter === nextLetter) {
// 			counter++;
// 		} else {
// 			output += currentLetter + String(counter);
// 			counter = 1;
// 		}
// 	}
// 	console.log(output);
// 	return output.length < string.length ? output : string;
// })("aabcccccaaa");

// Adding UI.
const compressor = (string) => {
	let output = "";
	let counter = 1;

	for (let i = 0; i < string.length; i++) {
		let currentLetter = string[i];
		let nextLetter = string[i + 1];
		if (currentLetter === nextLetter) {
			counter++;
		} else {
			output += currentLetter + counter;
			counter = 1;
		}
	}
	console.log(output); // Console validation
	return output.length < string.length ? output : string; // Operador ternario
};
// DOM Interaction.
const send = document.getElementById("send");
send.addEventListener("click", (e) => {
	const inputString = document.getElementById("inputString").value;
	const output = document.getElementById("output");
	output.innerText = compressor(inputString);
});
