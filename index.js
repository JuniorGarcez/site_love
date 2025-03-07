document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slider-controls input");
    const images = document.querySelectorAll(".slider li");
    let currentIndex = 0;
    let interval;
  
    function updateSlide(index) {
      images.forEach((img, i) => {
        img.style.opacity = i === index ? "1" : "0";
      });
  
      slides[index].checked = true;
      currentIndex = index;
    }
  
    function startAutoSlide() {
      interval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
      }, 3000);
    }
  
    slides.forEach((slide, index) => {
      slide.addEventListener("change", () => {
        clearInterval(interval);
        updateSlide(index);
        startAutoSlide();
      });
    });
  
    updateSlide(currentIndex);
    startAutoSlide();

    function atualizarContador() {
      const dataInicial = new Date("2024-09-07T00:00:00");
      const dataAtual = new Date();
  
      let anoInicial = dataInicial.getFullYear();
      let mesInicial = dataInicial.getMonth();
      let diaInicial = dataInicial.getDate();
  
      let anoAtual = dataAtual.getFullYear();
      let mesAtual = dataAtual.getMonth();
      let diaAtual = dataAtual.getDate();
  
      let anos = anoAtual - anoInicial;
      
      let meses = mesAtual - mesInicial;
      if (meses < 0) {
          anos--;
          meses += 12;
      }
  
      let dias = diaAtual - diaInicial;
      if (dias < 0) {
          let ultimoDiaMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();
          dias += ultimoDiaMesAnterior;
          meses--;
          if (meses < 0) {
              anos--;
              meses += 12;
          }
      }
  
      let diferencaMilissegundos = dataAtual - new Date(anoAtual, mesAtual, diaInicial);
      let horas = Math.floor(diferencaMilissegundos / (1000 * 60 * 60));
      diferencaMilissegundos -= horas * (1000 * 60 * 60);
      
      let minutos = Math.floor(diferencaMilissegundos / (1000 * 60));
      diferencaMilissegundos -= minutos * (1000 * 60);
      
      let segundos = Math.floor(diferencaMilissegundos / 1000);
  
      document.getElementById("anos").textContent = anos;
      document.getElementById("meses").textContent = meses;
      document.getElementById("dias").textContent = dias;
      document.getElementById("horas").textContent = horas;
      document.getElementById("minutos").textContent = minutos;
      document.getElementById("segundos").textContent = segundos;
  }
  setInterval(atualizarContador, 1000);
  atualizarContador();
  
  });
  