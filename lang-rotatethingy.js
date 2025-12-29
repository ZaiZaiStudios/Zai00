const messages = [
  "Want another language !!? Here you go:",
  "Une autre langue ? Voilà :",
  "¿Otro idioma? Aquí tienes:",
  "別の言語がいい？どうぞ：",
  "想换一种语言吗？在这里：",
];

let index = 0;
const target = document.getElementById("lang-rotator");

setInterval(() => {
  index = (index + 1) % messages.length;
  target.textContent = messages[index];
}, 5000);
