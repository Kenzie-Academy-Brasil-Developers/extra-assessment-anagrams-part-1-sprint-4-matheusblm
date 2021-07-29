const button = document.getElementById("findButton");

button.addEventListener("click", function () {
	let typedText = document.getElementById("input").value;
	let anagram = getAnagramsOf(typedText);
	const spanWord = document.createElement("span"); 
	const wordContent = anagram
	spanWord.innerText = wordContent; 
	const div = document.getElementById("test");
	div.appendChild(spanWord); 
      });
      


function getAnagramsOf(text){
	let palavra = alphabetize(text)
	let result = []
	for(let i = 0; i<palavras.length; i++){
	  if(palavra === alphabetize(palavras[i])){
	    result.push(palavras[i])
	  }
	}
	return result.join(" ")
}
function alphabetize(a) {
	return a.toLowerCase().split("").sort().join("").trim();
}

