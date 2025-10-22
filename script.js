// complete the given function
function palindrome(str){
	return !!str.split(" ").reverse().join(" ")

}

let sentence = prompt("Enter a sentence");
if(palindrome(sentence)){
	return alert(true);
} else {
	return alert(false);
}

