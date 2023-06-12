<<<<<<< HEAD
const urlParams = new URLSearchParams(window.location.search);
const precoFreteG = urlParams.get('precoFrete');


=======
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
function voltarPagina() {
    history.back();
}

<<<<<<< HEAD
function obterDataAtual() {
    const data = new Date();
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    
    const dataFormatada = `${ano}-${mes}-${dia}`;
    return dataFormatada;
=======
// Função para exibir a janela de erro
function exibirErro() {
Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: 'Ocorreu um erro. Tente novamente mais tarde.',
});
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
}

//Obtem o nome do usuario pelo cookie e salva em uma variavel para usar no header.
const nomeUsuarioCookie = document.cookie.replace(/(?:(?:^|.*;\s*)NomeUsuario\s*=\s*([^;]*).*$)|^.*$/, "$1");
const nomeUsuarioHeader = document.getElementById('nomeUsuarioHeader');

if (nomeUsuarioCookie) {
    nomeUsuarioHeader.textContent = nomeUsuarioCookie;
} else {
    nomeUsuarioHeader.textContent = ' ';
}

//Deixa o ultimo item selecionado de outra cor
const icons = document.querySelectorAll('.itemPintado');

icons.forEach(icon => {
    icon.addEventListener('click', function() {
        console.log('Ícone clicado:', this); 
    // Remove a classe "active" de todos os ícones
    icons.forEach(icon => {
        icon.classList.remove('active');
    });

    // Adiciona a classe "active" apenas ao ícone clicado
    this.classList.add('active');
});
});

<<<<<<< HEAD
// --------------- CALCULAR VALOR TOTAL PARA O CONTAINER RESUMO ---------------
function CalcularValorTotal() {
    var precoProds = document.querySelectorAll('.price');
    var total = 0;

    for (var i = 0; i < precoProds.length; i++) {
        var preco = parseFloat(precoProds[i].textContent.trim().replace('R$', '').replace(',', '.'));
        if (!isNaN(preco)) {
            total += preco;
        }
    }

    var precoTotalElement = document.getElementById("precoTotal");
    if (precoTotalElement) {
        precoTotalElement.textContent = total.toFixed(2); 
    }

    var precoFinalElement = document.getElementById("precoFinal");
    var precoFinal10xElement = document.getElementById("precoFinal10x");

    var precoFrete = parseFloat(precoFreteG)
    var precoFinal = total + precoFrete;

    if (!isNaN(precoFinal)) {
        precoFinalElement.textContent = precoFinal
    
    var precoFinal10x = precoFinal * 0.1;
    precoFinal10xElement.textContent = precoFinal10x.toFixed(2)
    } 

    var precoPixElement = document.getElementById('precoPix');
    var descontoElement = document.getElementById('desconto');

    var precoPix = precoFinal * 0.88
    precoPixElement.textContent = precoPix.toFixed(2);
    descontoElement.textContent = (precoFinal - precoPix).toFixed(2);
    
}

    


// --------------- ALTERAR VALOR DO INPUT DA QUALIDADE PARA MENOS 1 ---------------
var botoesMenor = document.querySelectorAll('.botoesMenor');

botoesMenor.forEach(function(botao) {
    botao.addEventListener('click', function() {
    var input = botao.parentNode.querySelector('input');
    var quantidade = parseInt(input.value);
    if (quantidade > 1) {
        quantidade--;
        input.value = quantidade;
        atualizarPrecos();
    }
});
});

// --------------- ALTERAR VALOR DO INPUT DA QUALIDADE PARA MAIS 1 ---------------
var botoesMaior = document.querySelectorAll('.botoesMaior');

botoesMaior.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var input = botao.parentNode.querySelector('input');
        var quantidade = parseInt(input.value);
        quantidade++;
        input.value = quantidade;
        atualizarPrecos();

});
});

// --------------- ATUALIZAR O PREÇO DOS PRODUTOS COM BASE NA QUANTIDADE DO PRODUTO ---------------
function calcularPrecos() {
    // Verificar se os arrays de preços e quantidades têm o mesmo tamanho
    if (precosProdutos.length !== quantidadesProdutos.length) {
        console.log('Os arrays de preços e quantidades têm tamanhos diferentes.');
        return;
    }

    // Selecionar todos os spans com a classe 'price'
    var spansPrecos = document.querySelectorAll('.contentProd .prod-preco .price');

    // Iterar sobre os spans de preços e atualizar seus valores com os preços totais
    spansPrecos.forEach(function(spanPreco, index) {
    // Verificar se o índice é válido no array de quantidades
    if (index >= quantidadesProdutos.length) {
        console.log('Índice inválido no array de quantidades.');
        return;
    }

    // Obter o preço e a quantidade correspondentes
    var preco = precosProdutos[index];
    var quantidade = quantidadesProdutos[index];

    // Calcular o preço total
    var precoTotal = preco * quantidade;

    // Atualizar o valor do span com o preço total
    spanPreco.textContent = 'R$ ' + precoTotal.toFixed(2);
    });
}

// --------------- OBTER VALORES DE TODOS OS PRODUTOS---------------
function obterInfoProdutos() {

        precosProdutos = [];
        quantidadesProdutos = [];
        idProdutos = [];
    
        var elementosProdutos = document.querySelectorAll('.contentProd');
    
      // Iterar sobre os elementos de produto e obter o valor do preço e da quantidade de cada um
        elementosProdutos.forEach(function(elemento) {
            var idElemento = elemento.querySelector('.prod-id #prod-id');
            var precoElemento = elemento.querySelector('.prod-preco .price');
            var quantidadeElemento = elemento.querySelector('.prod-qtn input');
        
        if (precoElemento && quantidadeElemento && idElemento) {
            var precoTexto = precoElemento.textContent.trim().replace('R$', '').replace(',', '.');
            var preco = parseFloat(precoTexto);
            var quantidade = parseInt(quantidadeElemento.value);
            var idtexto = idElemento.textContent.trim().replace('COD:', '');
            var id = parseFloat(idtexto)

            // console.log('Preço individual: ',precoTexto)
            // console.log('ID individual: ',id)
            // console.log('Quantidade individual: ',quantidade)

            // Verificar se o valor do preço, quantidade e id são válidos e adicioná-los aos arrays
            if (!isNaN(preco) && !isNaN(quantidade) && !isNaN(id)) {
                idProdutos.push(id);
                precosProdutos.push(preco);
                quantidadesProdutos.push(quantidade);
            }
        }
    });
}
// --------------- ATUALIZA TODOS OS VALORES DE TODOS OS PRODUTOS---------------
function atualizarPrecos() {
    quantidadesProdutos = [];

    var elementosProdutos = document.querySelectorAll('.contentProd');

    elementosProdutos.forEach(function(elemento, index) {
        var quantidadeElemento = elemento.querySelector('.prod-qtn input');

    if (quantidadeElemento) {
        var quantidade = parseInt(quantidadeElemento.value);

        // Verificar se o valor da quantidade é válido e adicioná-lo ao array
        if (!isNaN(quantidade)) {
            quantidadesProdutos.push(quantidade);
        } else {
            console.log('Valor de quantidade inválido no produto de índice: ' + index);
        }
    }
    });
    calcularPrecos();
    CalcularValorTotal();
}

// --------------- REMOVER PRODUTO---------------
var botoesRemover = document.querySelectorAll('.prod-qtn-remove');

botoesRemover.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var produto = botao.closest('.contentProd');

        // Remover o elemento do produto
        produto.remove();
        verificarPrecosExistem();
        atualizarPrecos() ;
    });
});



// --------------- REMOVER TODOS OS  PRODUTO---------------
var removerTudoBtn = document.querySelector('.btn-remover-tudo');
var listaProdutosSection = document.querySelector('.listaprodutos');

removerTudoBtn.addEventListener('click', function() {
    var confirmacao = window.confirm("Tem certeza de que deseja remover todos os produtos?");

    if (confirmacao) {
        while (listaProdutosSection.firstChild) {
            listaProdutosSection.removeChild(listaProdutosSection.firstChild);
        }
    }
});

// --------------- ATUALIZAR O ARRAY COM OS PREÇOS APOS REMOVER UM PRODUTO---------------
function verificarPrecosExistem() {
    var elementosProdutos = document.querySelectorAll('.contentProd');
    var precosExistentes = [];
    var quantidadesExistentes = [];

    // Verificar cada preço existente nos elementos de produtos
    precosProdutos.forEach(function(preco, index) {
        var precoExistente = false;

        elementosProdutos.forEach(function(elemento) {
            var precoElemento = elemento.querySelector('.prod-preco .price');

            var quantElemento = elemento.querySelector('.quant')
            var quantidadeP = parseInt(quantElemento.value);

            var precoP = precoElemento.textContent.trim().replace('R$', '').replace(',', '.');

            if (!isNaN(precoP) && preco === precoP/quantidadeP) {
                precoExistente = true;
                precosExistentes.push(preco);

                // Verificar se o índice é válido no array de quantidades
                if (index < quantidadesProdutos.length) {
                    quantidadesExistentes.push(quantidadesProdutos[index]);
                }
            }
        });
    });

    // Atualizar arrays precosProdutos e quantidadesProdutos com os valores existentes
    precosProdutos = precosExistentes;
    quantidadesProdutos = quantidadesExistentes;

    console.log('Lista de produtos atualizada após remover:', precosProdutos);
    console.log('Lista de quantidades atualizada após remover:', quantidadesProdutos);



    // Atualizar array precosProdutos com valores existentes
    console.log('LISTA DE PRODUTOS ATUALIZADA APOS REMOVER: ',precosExistentes)
    precosProdutos = precosExistentes;
}


    // Chamada da função para obter os preços e quantidades dos produtos ao carregar a página
    window.addEventListener('load', function() {


        document.getElementById("precoFrete").innerText = precoFreteG;

        obterInfoProdutos();
        calcularPrecos(); 
        CalcularValorTotal() 
        console.log('Ids dos produtos:', idProdutos);
        console.log('Preços dos produtos:', precosProdutos);
        console.log('Quantidades dos produtos:', quantidadesProdutos);
        
    });



    function enviarDados() {
        const precoFinalElemento = document.getElementById("precoFinal");
        var precoFinal = precoFinalElemento.textContent.trim().replace('R$', '').replace(',', '.');
        const dataAtual = obterDataAtual();
    
        const data = {
            ids_prod: JSON.stringify(idProdutos),
            quantidadesProdutos: JSON.stringify(quantidadesProdutos),
            precoFinal: precoFinal,
            dataEmissao: dataAtual
        };
    
        console.log('Informações do pedido:', data);
    
        $.ajax({
            url: '/pedido/dados',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(result) {
                console.log('Dados enviados com sucesso:', result);
                window.location.href = '/finalizacao';
            },
            error: function(error) {
                console.error('Erro ao enviar os dados:', error);
            }
        });
    }

    

    // MASCARA DO INPUT

    function formatar(mascara, documento){
        var i = documento.value.length;
        var saida = mascara.substring(0,1);
        var texto = mascara.substring(i);

        if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
        }
    }
=======
>>>>>>> d497055adb0c99e32b6c2f5ae32be0811dd1e426
