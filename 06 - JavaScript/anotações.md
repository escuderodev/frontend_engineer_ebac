# Anotações

## comandos básicos do javascript
- alert('mensagem') = mostra uma mensagem em janela pop-up;
- prompt('mensagem') = mostra um pup-up com um textfield para preenchimento pelo usuário;
- console.log('mensagem') = mostra uma mensagem no console;
- typeof variavel = verificar o tipo de dado da variável;
- variavel.length = retorna o tamanho de um elemento;
- variavel.slice(0, 2) = corta o elemento mostrando apenas os valores existentes no range informado;
- variavel.search('elemento') = pesquisa se o conteúdo existe na variável e retorna a sua posição/indice;
- to.Fixed(2) = define a quantidade de casas decimais;
- variavel.value.split('separador'); = quebra os valores digitados em palavras e cria um array de palavras;
    - com este recurso podemos validar se um nome é completo ou não;
    - ex.: if(variavel.value.split(' ') > 1) {faça...};
- const botao = document.getElementById('btn_enviar').desibled = true - desabilita o elemento botão;
    - ex.: document.getElementById('btn_depositar').disabled = document.getElementById('beneficiario').value.split(' ').length < 2;

## observações
- variáveis são declaradas com let e podem ser declaradas sem valor;
    - variáveis tambpem podem ser declaradas com var, mas essa sintaxe é antiga;
- constantes são declaradas com const e não podem ser declaradas sem valor;

## eventos addEventList
- submit - observa o que ocorre quando um formulário realiza o submit;
- change - observa a mudança de um elemento;
- keyup - obersa a mudança de um elemento em tempo real, conforme o usuário digita algo;