function encode() {
  let input = document.getElementById("input").value; // captura el valor del input

  let inputArray = input.toLowerCase().split(""); // Pasa ese input a minus y lo transforma en array transformando cada caracter en una posicion

  console.log(inputArray);
  var msgEncryp = [];

  for (var i = 0; i < inputArray.length; i++) {
    if (i === "e") {
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
    // console.log(input)
  }

  let msgEncrypted = msgEncryp.join("");
  document.getElementById("encryptedMsg").innerHTML = msgEncrypted;
  console.log(msgEncrypted);
}

// var form = document.getElementById("forms");
// form.onclick = function(e){
//   e.preventDefault();
// var name = document.getElementById("name").value;
//   console.log(name);
// document.getElementById('print').innerHTML=name.toUpperCase();
// }
