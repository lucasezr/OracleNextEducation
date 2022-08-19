function msgDecrypt() {
  const textValue = document.getElementById("textarea").value; // Captura el valor del input ingresado por el cliente
  const decrypt = textValue
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.getElementById("encryptedMsg").innerHTML = decrypt;
  focus();
}

function focus(x) {
  textValue.focus(x);
}

// Agrego funcion al boton de copiar
function copy() {
  let copyText = document.querySelector("#textarea");
  copyText.select();
  document.execCommand("copy");
}
