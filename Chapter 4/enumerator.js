
window.onload = init();

function init () {
  var fido = {
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetch", "scratches"]
  }
  enumerateProp(fido);
}

function enumerateProp(object) {
  var prop;
  for (prop in object) {
    alert("This object has a " + prop + " property ");
  }
}
