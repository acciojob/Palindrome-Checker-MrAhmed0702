// complete the given function
function palindrome(str){
	const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
	return cleanedStr === cleanedStr.split('').reverse().join('');
}

let sentence = prompt("Enter a sentence");

if(palindrome(sentence)) alert(true)
else alert(false);
