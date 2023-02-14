class Produto{
//construtor para colocar as informações dos produtos array 
    constructor(){
        this.id = 1;
        this.arrayProdutos = [];

    }

    //depois de averiguado se certo os dados serão salvos e mandados para o array
    salvar(){
     let produto = this.lerdados();

     if(this.validaCampo(produto)){
        this.adicionar(produto);
     }
     
     this.listaLabel();
       
    }

    //cria linhas para cada novo produto adicionado
    listaLabel(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
           let tr = tbody.insertRow();

           let td_id = tr.insertCell();
           let td_produto = tr.insertCell();
           let td_pesoDoProduto = tr.insertCell();
           let td_valor = tr.insertCell();
           let td_acao = tr.insertCell();

           //colocando as informações do array dentro das linhas
           td_id.innerText = this.arrayProdutos[i].id;
           td_produto.innerText = this.arrayProdutos[i].produto;
           td_pesoDoProduto.innerText = this.arrayProdutos[i].pesoDoProduto;
           td_valor.innerText = this.arrayProdutos[i].valor;
        

        }
    }

    //coloca a informação e vai adicionando mais id a cada informação colocada
    adicionar(produto){
         this.arrayProdutos.push(produto);
         this.id++;
    }

     //averigua se os dados colocados pelo o usuário estão corretos, se estiver autoriza se não manda uma mensagem falando o que falta
    lerdados(){
        let produto = {}
       
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.pesoDoProduto = document.getElementById('pesoDoProduto').value;
        produto.valor = document.getElementById('valor').value;

        if(produto.nomeProduto.length < 3){
            alert('O nome deve ter mais de 3 caracteres');
        }
        if(produto.pesoDoProduto < 100){
            alert('O produto deve ter mais de 100 kilos para ser cadastrado');
        }

        return produto;
    }

    //se algum campo ficar vazio manda um alerta para o usuário informando problema
    validaCampo(produto){

        let msg = '';

        if(produto.nomeProduto == ''){
            msg += ' - informe o nome do produto \n';
        }
        if(produto.pesoDoProduto == ''){
            msg += ' - informe o peso do produto \n';
        }
        if(produto.valor == ''){
            msg += ' - informe o valor do produto \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true
    }

    //funcão para excluir
    excluir(){
        alert("excluido com sucesso")
    }
}

var produto = new Produto();