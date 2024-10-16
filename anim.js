// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Only You", time: 2 },
  { text: "can make all this world seem right", time: 7 },
  { text: "Only You", time: 14 },
  { text: "can make the darkness bright", time: 20 },
  { text: "Only you and you alone", time: 26 },
  { text: "can thrill me like you do", time: 32 },
  { text: "And fill my heart with love for only you", time: 38 },
  { text: "Oh, only you", time: 49 },
  { text: "can do make all this change in me", time: 55 },
  { text: "For it's true", time: 62 },
  { text: "you are my destiny", time: 67 },
  { text: "When you hold my hand", time: 75 },
  { text: " I understand the magic that you do", time: 79 },
  { text: "You're my dream come true", time: 86 },
  { text: "my one and only you", time: 89 },
  { text: "Oh, only you", time: 98 },
  { text: "can do make all this change in me", time: 103},
  { text: "For it's true", time: 110 },
  { text: "you are my destiny", time: 115 },
  { text: "When you hold my hand", time: 122 },
  { text: " I understand the magic that you do", time: 126 },
  { text: "You're my dream come true", time: 134 },
  { text: "MY ONE AND ONLY YOU", time: 138 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 6s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 6000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);