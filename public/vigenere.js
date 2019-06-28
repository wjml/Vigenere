// Alfabeto
var alfabeto = "abcdefghijklmnopqrstuvwxyz";

$("#encrypt").click(function() {
	var key = $("#key").val();
	key = key.toLowerCase();

	var input = $("#input").val();
	input = input.toLowerCase();

	var output = $("#output");

	key = alterar_chave(key, input);

	output.text(cifrar(input, key));
});

$("#decrypt").click(function() {
	var key = $("#key").val();
	key = key.toLowerCase();

	var input = $("#input").val();
	input = input.toLowerCase();

	var output = $("#output");

	key = alterar_chave(key, input);

	output.text(decifrar(input, key));
});
// Cifrar palavra
var cifrar_letra = function(letra, valor) {
	for (var i = 0; i < letra.length; i++) {
		for (var j = 0; j < alfabeto.length; j++) {
			if (alfabeto[j] == letra[i]) {
				return alfabeto[(j + valor) % 26];
			}
		}
	}
};

// Decifrar palavra
var decifrar_letra = function(letra, valor) {
	for (var i = 0; i < letra.length; i++) {
		for (var j = 0; j < alfabeto.length; j += 1) {
			if (letra[i] == alfabeto[j]) {
				return alfabeto[(j - valor + 26) % 26];
			}
		}
	}
};

// Retornar posicao no alfabeto
var posicao = function(caracter) {
	for (var i = 0; i < alfabeto.length; i += 1) {
		if (alfabeto[i] == caracter) {
			return i;
		}
	}
};

// Cifrar texto
var cifrar = function(texto, chave) {
	var cifrado = "";

	texto = remover_acento(texto);

	for (var i = 0; i < texto.length; i += 1) {
		switch (texto[i]) {
			case " ":
				cifrado += texto[i];
				break;
			case ",":
				cifrado += texto[i];
				break;
			case ".":
				cifrado += texto[i];
				break;
			case "!":
				cifrado += texto[i];
				break;
			case "?":
				cifrado += texto[i];
				break;
			case '"':
				cifrado += texto[i];
				break;
			default:
				cifrado += cifrar_letra(texto[i], posicao(chave[i]));
		}
	}

	return cifrado;
};

// Decifrar texto
var decifrar = function(texto, chave) {
	var decifrado = "";

	texto = remover_acento(texto);

	for (var i = 0; i < texto.length; i += 1) {
		switch (texto[i]) {
			case " ":
				decifrado += texto[i];
				break;
			case ",":
				decifrado += texto[i];
				break;
			case ".":
				decifrado += texto[i];
				break;
			case "!":
				decifrado += texto[i];
				break;
			case "?":
				decifrado += texto[i];
				break;
			case '"':
				decifrado += texto[i];
				break;
			default:
				decifrado += decifrar_letra(texto[i], posicao(chave[i]));
		}
	}

	return decifrado;
};

// Alterar chave
var alterar_chave = function(chave, texto) {
	var nova_chave = "";

	chave = retirar_espacos(chave);
	chave = remover_acento(chave);

	while (nova_chave.length < texto.length) {
		nova_chave += chave;
	}

	if (nova_chave.length > texto.length) {
		chave = "";

		for (var i = 0; i < texto.length; i += 1) {
			chave += nova_chave[i];
		}

		console.log(nova_chave);

		return adicionar_espacos(texto, chave);
	}

	return adicionar_espacos(texto, nova_chave);
};

// Retira espaços da chave
var retirar_espacos = function(chave) {
	var nova_chave = "";

	for (var i = 0; i < chave.length; i++) {
		if (chave[i] != " ") {
			nova_chave += chave[i];
		}
	}

	return nova_chave;
};

// Adiciona espaços na chave de acordo com o texto
var adicionar_espacos = function(texto, chave) {
	var nova_chave = "";
	var j = 0;

	for (var i = 0; i < texto.length; i++) {
		if (texto[i] == " ") {
			nova_chave += " ";
		} else {
			nova_chave += chave[j];
			j++;
		}
	}

	console.log(nova_chave);

	return nova_chave;
};

// Retirar acentuação
function remover_acento(texto) {
	str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
	str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";

	var nova = "";

	for (var i = 0; i < texto.length; i++) {
		if (str_acento.indexOf(texto.charAt(i)) != -1) {
			nova += str_sem_acento.substr(str_acento.search(texto.substr(i, 1)), 1);
		} else {
			nova += texto.substr(i, 1);
		}
	}

	return nova;
}
