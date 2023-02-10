const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const aviso = document.querySelector(".aviso");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
var i = 0;

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (texto) {

    texto = texto.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
      if (texto.includes(matrizCodigo[i][0])) {
        texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }
    return texto;
  }

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    aviso.value = "";
}

function desencriptar (texto) {

    texto = texto.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
      if (texto.includes(matrizCodigo[i][1])) {
        texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
      }
    }
    return texto;
  }

function btnCopiar() {
  let textoCopiado = document.querySelector(".mensagem");
  textoCopiado.select();
  document.execCommand("copy");
  alert("O texto \"" + textoCopiado.value + "\" foi copiado para a área de transferência. Pressione \"CTRL+V\" para colar.");
}