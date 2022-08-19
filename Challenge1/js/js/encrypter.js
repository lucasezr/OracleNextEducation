// Aca podria usar el mismo metodo aplicado en el archivo decrypter pero
// simplificando mucho mas el codigo, pero decidi hacerlo asi para mostrar otra alternativa.

function msgEncrypt() {
  let input = document.getElementById("textarea").value; // captura el valor del input
  let inputArray = input.toLowerCase().split(""); // Pasa ese input a minus y lo transforma en array transformando cada caracter en una posicion
  var msgEncryp = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === "e") {
      msgEncryp.push("enter");
    } else if (inputArray[i] === "i") {
      msgEncryp.push("imes");
    } else if (inputArray[i] === "a") {
      msgEncryp.push("ai");
    } else if (inputArray[i] === "o") {
      msgEncryp.push("ober");
    } else if (inputArray[i] === "u") {
      msgEncryp.push("ufat");
    } else {
      msgEncryp.push(inputArray[i]);
    }
  }

  focus();

  let msgEncrypted = msgEncryp.join("");
  document.getElementById("encryptedMsg").innerHTML = msgEncrypted;
}
