// // Muitas combinações duplicadas
// class AudioWindows {
//   play() {
//     console.log("Reproduzindo áudio no Windows");
//   }
// }

// class AudioLinux {
//   play() {
//     console.log("Reproduzindo áudio no Linux");
//   }
// }

// class VideoWindows {
//   play() {
//     console.log("Reproduzindo vídeo no Windows");
//   }
// }

// class VideoLinux {
//   play() {
//     console.log("Reproduzindo vídeo no Linux");
//   }
// }

// Implementação: Renderizadores (podem variar independente das formas)
class Windows {
  playformat(formato) {
    console.log(`Tocando ${formato} no Windows`);
  }
}

class Linux {
  playformat(formato) {
    console.log(`Tocando ${formato} no Linux`);
  }
}


// Abstração: Forma (usa um renderizador)
class Formato {
  constructor(formato) {
    this.formato = formato;
  }
}

class Video extends Formato {
  play() {
    this.formato.playformat("video");
  }
}

class Audio extends Formato {
  play() {
    this.formato.playformat("audio");
  }
}


// Cliente bridge
const windows = new Windows();
const linux = new Linux();

const b1 = new Audio(windows);
b1.play();

const b2 = new Video(linux);
b2.play();

// // Cliente
// const a1 = new AudioWindows();
// a1.play();

// const v1 = new VideoLinux();
// v1.play();
