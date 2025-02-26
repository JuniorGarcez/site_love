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
  
    updateSlide(currentIndex); // Garante que o primeiro slide seja visível ao carregar
    startAutoSlide(); // Inicia o carrossel automático

    function atualizarContador() {
        const dataInicial = new Date("2024-09-07T00:00:00"); // Ajuste a data inicial desejada
        const dataAtual = new Date();
        
        let diferenca = dataAtual - dataInicial; // Diferença em milissegundos
    
        // Cálculo do tempo decorrido
        let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
        diferenca -= anos * (1000 * 60 * 60 * 24 * 365);
    
        let meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30.44)); // Média de dias por mês
        diferenca -= meses * (1000 * 60 * 60 * 24 * 30.44);
    
        let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        diferenca -= dias * (1000 * 60 * 60 * 24);
    
        let horas = Math.floor(diferenca / (1000 * 60 * 60));
        diferenca -= horas * (1000 * 60 * 60);
    
        let minutos = Math.floor(diferenca / (1000 * 60));
        diferenca -= minutos * (1000 * 60);
    
        let segundos = Math.floor(diferenca / 1000);
    
        // Atualiza os elementos na página
        document.getElementById("anos").textContent = anos;
        document.getElementById("meses").textContent = meses;
        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
      }
    
      // Atualiza o contador a cada segundo
      setInterval(atualizarContador, 1000);    // Chama a função imediatamente para evitar o atraso de 1 segundo
    atualizarContador();
  });
  