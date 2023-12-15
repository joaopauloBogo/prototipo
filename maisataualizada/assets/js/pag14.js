document.addEventListener('DOMContentLoaded', function () {
    // Identificar o elemento de conteúdo editável
    var tabelaRiscosElement = document.getElementById('tabelaRiscos2');

    // Carregar conteúdo salvo
    var savedContent = localStorage.getItem('tabelaRiscosContent2');
    if (savedContent) {
        tabelaRiscosElement.innerHTML = savedContent;
    }

    // Adicionar um ouvinte de evento para salvar o conteúdo quando for alterado
    tabelaRiscosElement.addEventListener('input', function () {
        salvarLocalStoragePag14();
    });
});

let contadorLinhas = 1;

function adicionarLinhaPag14() {
    const tabela = document.getElementById('tabelaRiscos2');
    contadorLinhas++;

    const novaLinha1 = tabela.insertRow(-1);
    const novaCelula1 = novaLinha1.insertCell(0);
    novaCelula1.innerHTML = `Risco ${contadorLinhas}:`;
    novaCelula1.setAttribute("contenteditable", "true");

    const novaLinha2 = tabela.insertRow(-1);
    const novaCelula2 = novaLinha2.insertCell(0);
    novaCelula2.innerHTML = `Comunicado:`;
    novaCelula2.setAttribute("contenteditable", "true");

    // Salvar dados no localStorage
    salvarLocalStoragePag14();
}

function removerUltimaLinhaPag14() {
    const tabela = document.getElementById('tabelaRiscos2');
    if (tabela.rows.length > 2) {
        tabela.deleteRow(-1);
        tabela.deleteRow(-1);
        contadorLinhas--;

        // Remover dados do localStorage
        salvarLocalStoragePag14();
    }
}

function salvarLocalStoragePag14() {
    const tabelaRiscosElement = document.getElementById('tabelaRiscos2');
    localStorage.setItem('tabelaRiscosContent2', tabelaRiscosElement.innerHTML);
}
