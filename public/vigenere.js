const alphabet = "abcdefghijklmnopqrstuvwxyz";
const strAccent = 	"áàãâäéèêëíìîïóòõôöúùûüçñÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇÑ";
const strNoAccent = 	"aaaaaeeeeiiiiooooouuuucnAAAAAEEEEIIIIOOOOOUUUUCN";
var key = document.getElementById("key");
var input = document.getElementById("input");
var output = document.getElementById("output");
rtn = "";

function first() {
	rtn = "";
	j = 0;
	regex = /[A-Z]/i
	for (i = 0; i < input.value.length; i++) {
		if (regex.test(input.value[i]) || strAccent.includes(input.value[i])) {
			if (j >= key.value.length) {
				j = 0;
			}
			rtn += key.value[j++];
		} else {
			rtn += " ";
		}
	}
}

function second(mode) {
	first();
	output.value = "";
	for (i = 0; i < input.value.length; i++) {
		charCrypt(input.value[i], mode)
	}
}

function charCrypt(char, mode) {//mode==true: encrypt //mode==false: decrypt
	regex = /[A-Z]/
	isUpper = false
	if (!rtn[i].includes(" ")) {
		if (strAccent.includes(char)) char = strNoAccent[strAccent.indexOf(char)]
		if (regex.test(char)) isUpper = true
		switch (mode) {
			case true:
				char =
					alphabet[
					(alphabet.indexOf(char.toLowerCase()) + alphabet.indexOf(rtn[i])) % 26
					]; break
			case false:
				char =
					alphabet[
					Math.abs((alphabet.indexOf(rtn[i]) - alphabet.indexOf(char.toLowerCase()) - 26) % 26)
					];
		}
		if (isUpper) char = char.toUpperCase()
	}
	output.value += char
}