// Função para esperar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {

    // 1. Alerta modificado (mais amigável)
    setTimeout(function() {
        console.log("Página totalmente carregada!");
    }, 500);

    // 2. Efeito no título (mudança de cor temporária)
    const titulo = document.querySelector('h1');
    if(titulo) {
        titulo.addEventListener('click', function() {
            titulo.style.color = 'green';
            setTimeout(function() {
                titulo.style.color = 'green';
            }, 1000);
        });
    }

    // 3. Botão para mostrar/esconder hobbies (versão melhorada)
    const listaHobbies = document.querySelector('ul');
    if(listaHobbies) {
        const botaoHobbies = document.createElement('button');
        botaoHobbies.textContent = 'Mostrar/Esconder Hobbies';
        botaoHobbies.style.cssText = 'margin: 10px 0; padding: 8px 15px; background:brown; color: white; border: none; border-radius: 4px; cursor: pointer;';

        listaHobbies.parentNode.insertBefore(botaoHobbies, listaHobbies);

        botaoHobbies.addEventListener('click', function() {
            listaHobbies.style.display = listaHobbies.style.display === 'none' ? 'block' : 'none';
        });
    }

    // 4. Efeito nas imagens dos países (com tratamento de erro)
    const imagensPaises = document.querySelectorAll('table img');
    imagensPaises.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(2.0)';
            this.style.transition = 'transform 0.8s';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 5. Link da Twitch com confirmação
    const linkTwitch = document.querySelector('a[href="https://www.twitch.tv"]');
    if(linkTwitch) {
        linkTwitch.addEventListener('click', function(e) {
            if(!confirm('Você será redirecionado para a Twitch. Continuar?')) {
                e.preventDefault();
            }
        });
    }
});
