document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 100; 

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    const quantidadeFinal = 80;
    
    const intervaloTempo = 50; 
  
    const tempoMaximo = 5000; 
  
    function atualizarContador(tempoInicial) {
      const tempoDecorrido = Date.now() - tempoInicial;
  
      if (tempoDecorrido >= tempoMaximo) {
        console.log('Tempo máximo de carregamento atingido');
        return;
      }
  
      const contadorElement = document.getElementById('count');
  
      if (quantidadeInicial < quantidadeFinal) {
        quantidadeInicial += 1;
  
        if (quantidadeInicial > quantidadeFinal) {
          quantidadeInicial = quantidadeFinal;
        }
      }
      
      contadorElement.textContent = quantidadeInicial.toLocaleString(); 
  
     
      if (quantidadeInicial < quantidadeFinal && tempoDecorrido < tempoMaximo) {
        setTimeout(() => atualizarContador(tempoInicial), intervaloTempo); 
      }
    }
  
    let quantidadeInicial = 0;
    const tempoInicial = Date.now(); 
    atualizarContador(tempoInicial);
  });
