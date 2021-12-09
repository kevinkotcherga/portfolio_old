const text = document.getElementById("message");

const prog = "Bienvenue sur mon portfolio ! Voici un message qui se rédige automatiquement !!";

let index = 1;

function writeText() {
  text.innerText = prog.slice(0, index);

  index++; 

  if(index > prog.length) {
    index = 1;
  }

};

setInterval(writeText, 70);