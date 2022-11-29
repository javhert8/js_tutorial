let Phrase = require("javhert8-palindrome");
let string = prompt("Escribe el palindromo")
let phrase = new Phrase(string);
if (phrase.palindrome())
    { alert(string + ` es un palindromo`); }
else
    { alert("eso no es un palindromo"); }
