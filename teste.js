document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");

  // Configurações da sua animação
  const totalFrames = 32; // Altere para o número total de imagens que você tem
  const images = [];
  let currentFrame = 0;
  
  // Controle de velocidade (FPS)
  let fps = 5; // 24 quadros por segundo é o padrão de cinema
  let interval = 1000 / fps;
  let then = Date.now();

  // 1. Pré-carregamento das imagens na memória
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    // O padStart(3, '0') transforma 1 em '001', 15 em '015', etc.
    const frameNumber = String(i).padStart(3, "0"); 
    img.src = `./assets/agua-frames/frame_${frameNumber}.jpg`; // Ajuste o caminho
    images.push(img);
  }

  // Ajusta o tamanho do canvas para o tamanho da tela
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawFrame(currentFrame);
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas(); // Chama na primeira carga

  // 2. Função para desenhar a imagem atual no canvas
  function drawFrame(index) {
    if (images[index] && images[index].complete) {
      // Limpa o canvas antes de desenhar
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenha a imagem cobrindo todo o canvas (simulando object-fit: cover)
      const imgRatio = images[index].width / images[index].height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, x, y;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        x = 0;
        y = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        x = (canvas.width - drawWidth) / 2;
        y = 0;
      }
      
      ctx.drawImage(images[index], x, y, drawWidth, drawHeight);
    }
  }

  // 3. Loop de animação
  function animate() {
    requestAnimationFrame(animate);

    let now = Date.now();
    let delta = now - then;

    // Só atualiza o frame se o tempo decorrido for maior que o intervalo do FPS
    if (delta > interval) {
      then = now - (delta % interval);
      
      drawFrame(currentFrame);
      
      // Avança para o próximo frame ou volta para o zero (loop)
      currentFrame = (currentFrame + 1) % totalFrames;
    }
  }

  // Inicia a animação quando a primeira imagem carregar
  images[0].onload = () => {
    animate();
  };
});

/*document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("hero-canvas");
  const ctx = canvas.getContext("2d");

  // Configurações da sua animação
  const totalFrames = 32; // Altere para o seu número real de frames
  const images = [];
  
  // CORREÇÃO: Variáveis de controle declaradas no topo!
  let currentFrameIndex = 0;
  let isTicking = false;
  
  // 1. Pré-carregamento das imagens
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    const frameNumber = String(i).padStart(3, "0");
    img.src = `./assets/agua-frames/frame_${frameNumber}.jpg`; // Ajuste o caminho conforme sua pasta
    images.push(img);
  }

  // Ajuste responsivo do Canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Agora o currentFrameIndex já existe na memória quando isso rodar
    drawFrame(Math.max(0, currentFrameIndex)); 
  }
  
  // 2. Lógica de desenho
  function drawFrame(index) {
    if (images[index] && images[index].complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const imgRatio = images[index].width / images[index].height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth, drawHeight, x, y;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        x = 0;
        y = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        x = (canvas.width - drawWidth) / 2;
        y = 0;
      }
      
      ctx.drawImage(images[index], x, y, drawWidth, drawHeight);
    }
  }

  // Evento de resize da janela
  window.addEventListener("resize", resizeCanvas);
  
  // Chama o resize inicial
  resizeCanvas();

  // Exibe o primeiro frame assim que carregar
  images[0].onload = () => drawFrame(0);

  // 3. Captura do Scroll do usuário
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    
    // Evita divisão por zero se a página não tiver scroll
    if (maxScrollTop <= 0) return; 

    const scrollFraction = scrollTop / maxScrollTop;
    
    const frameIndex = Math.min(
      totalFrames - 1,
      Math.floor(scrollFraction * totalFrames)
    );

    if (frameIndex !== currentFrameIndex) {
      currentFrameIndex = frameIndex;
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          drawFrame(currentFrameIndex);
          isTicking = false;
        });
        isTicking = true;
      }
    }
  });
});*/