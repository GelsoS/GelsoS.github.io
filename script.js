function toggleFullscreen(img) {
  // Alterna a classe 'fullscreen' na imagem clicada
  img.classList.toggle("fullscreen");
  console.log(img);
}

const video = document.getElementById('myVideo');
window.addEventListener('scroll', () => {
  const rect = video.getBoundingClientRect();
  if (rect.top + rect.height < 0 || rect.bottom > window.innerHeight) {
    video.requestPictureInPicture();
    console.table({ 'rect': rect, 'window': window.innerHeight });
  } else {
    // Remove o Picture-in-Picture se o vídeo estiver visível
    if (document.pictureInPictureElement === video) {
      document.exitPictureInPicture();
      console.log("desativado");
    }
  }
});