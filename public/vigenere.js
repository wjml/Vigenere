const alphabet = "abcdefghijklmnopqrstuvwxyz";
const strAccent = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
const strNoAccent = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
rtn = "";
var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");
var key = document.getElementById("key");
var input = document.getElementById("input");
var output = document.getElementById("output");

function first() {
	rtn = "";
	j = 0;
	regex = [a - zA - Z] + g;
	for (i = 0; i < input.value.length; i++) {
		console.log(!input.value[i] == regex);
		if (input.value[i] == /[a-z]/i || strAccent.includes(input.value[i])) {
			if (j <= key.value.length) {
				rtn += key.value[j++];
			} else {
				j = 0;
			}
		} else {
			rtn += " ";
		}
	}
}

function second(mode) {
	first();
	//mode==true: encrypt
	//mode==false: decrypt
	mode ? (mode = 1) : (mode = -1);
	output.value = "";
	for (i = 0; i < input.value.length; i++) {
		if (!rtn[i] == " ") {
			output.value +=
				alphabet[
					(alphabet.indexOf(input.value[i]) + alphabet.indexOf(rtn[i]) * mode) %
						25
				];
		} else {
			output.value += input.value[i];
		}
	}
}
