document.addEventListener('DOMContentLoaded', function () {
    // Identificar o elemento de conteúdo editável
    var anomesElement = document.getElementById('anomes');

    // Carregar conteúdo salvo
    var savedContent = localStorage.getItem('anomesContent');
    if (savedContent) {
        anomesElement.innerHTML = savedContent;
    }

    // Adicionar um ouvinte de evento para salvar o conteúdo quando for alterado
    anomesElement.addEventListener('input', function () {
        localStorage.setItem('anomesContent', anomesElement.innerHTML);
    });
});
    
    
   








