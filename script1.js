class Produto{

    constructor(){
        this.id = 0;
        this.nomeProduto = '';
        this.pesoDoProduto = 0;
        this.valor = 0;

        this.arrayProdutos = [];

    }

    adicionar(){
     let produto = this.lerdados();

     if(this.validaCampo(produto)){
        alert('salvar');
     }
     
     console.log(produto);
       
    }

    lerdados(){
        let produto = {}
       
        produto.id = document.getElementById('id').value;
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

    validaCampo(produto){

        let msg = '';

        if(produto.id == ' '){
            msg += ' - informe o ID do produto \n';
        }
        if(produto.nomeProduto == ' '){
            msg += ' - informe o nome do produto \n';
        }
        if(produto.pesoDoProduto == ' '){
            msg += ' - informe o peso do produto \n';
        }
        if(produto.valor == ' '){
            msg += ' - informe o valor do produto \n';
        }
    }

    cancelar(){
        alert("exxcluido com sucesso")
    }
}

var produto = new Produto();