const cameraFeed = document.getElementById('camera-feed');
const colorCanvas = document.getElementById('color-canvas');
const context = colorCanvas.getContext('2d');

// Acessar a câmera do dispositivo
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        cameraFeed.srcObject = stream;
    })
    .catch(error => {
        console.error('Erro ao acessar a câmera:', error);
    });

// Processar o quadro de vídeo
cameraFeed.addEventListener('play', () => {
    const width = cameraFeed.videoWidth;
    const height = cameraFeed.videoHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    
    colorCanvas.width = width;
    colorCanvas.height = height;
    
    setInterval(() => {
        context.drawImage(cameraFeed, 0, 0, width, height);
        const imageData = context.getImageData(centerX - 10, centerY - 10, 20, 20);
        const dominantColor = getDominantColor(imageData.data);
        // Faça algo com a cor predominante, como exibi-la na tela
    }, 1000); // Captura e processamento a cada 1 segundo
});

// Função para calcular a cor predominante
function getDominantColor(pixels) {
    // Implemente a lógica para calcular a cor predominante
    // Pode ser feito através da contagem de ocorrências de tons de cores
    // em uma matriz de pixels
}
