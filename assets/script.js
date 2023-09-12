

class pedido{
    constructor(cliente,mesa,descricao){
    this.id = this.gerarId();
    this.cliente = cliente;
    this.mesa = mesa;
    this.descricao = descricao;
    this.totalPedidos = this.calcularTotaldePedidos();
}
gerarId(){
    return Math.floor(Math.random() * 1000);
}

calcularTotaldePedidos(){
    return this.titulares + this.reservas
}
}

class PedidoService {
    constructor(){
        this.pedidos = [];
    }
    
    adicionarPedido(parametro){
        this.pedidos.push(parametro);
    }
    listarPedidos(){
        return this.ped;
    }
    
    listarPedidosporId(parametro){
        return this.equipes.find((equipe) => equipe.id == parametro);
    }

    atualizarPedido(id,cliente,mesa,descricao){
        const pedido = this.listarPedidosporId(id);

        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.descricao = descricao;
        pedido.totalPedidos = pedido.calcularTotaldePedidos();

        return pedido;
        
    }

    deletePedido(parametro){
        return (this.pedidos = this.pedidos.filter
            ((pedido) => pedido.id != parametro
    ));
};
}

const pedidoService = new PedidoService();

function criarPedido() {
    const cliente = document.getElementById("nomedocliente").value;
    const mesa = Number (document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    const novoPedido = new pedido (cliente,mesa,descricao);

    pedidoService.adicionarPedido(novoPedido);
    
    listarPedidos();
    limparInputs();
   
}

function listarPedidos (){
    const pedidos = pedidoService.listarPedidos();


    const elementoLista = document.getElementById("listarEquipes");
    elementoLista.innerHTML = "";


    let content = "";
    
    pedidos.forEach((pedido) => {
        content += `
        <div onclick="listarPedidosporId(${pedido.id})">
        <p>Cliente: ${pedido.cliente} </p>
        </div>
       `;
    });
    
    elementoLista.innerHTML = content;
}



function listarPedidosporId (id){
    const pedido = pedidoService.listarPedidosporId(id);
    document.getElementById("listarPedidosUnica").classList.remove("hidden");
    const elementoLista = document.getElementById("listarEquipeUnica");
    
    elementoLista.innerHTML = "";

    let content = `
    <div>
        <p>Id: ${pedido.id}</p>
        <p>Cliente: ${pedido.cliente}</p>
        <p>Mesa: ${pedido.mesa}</p>
        <p>Descricao: ${pedido.descricao}</p>
        <button onclick ="atualizarPedido(${pedido.id})"><i class="fa-solid fa-pen" style="color: #373c43;"></i></button>
        <button onclick ="deletarPedido(${pedido.id})"><i class="fa-solid fa-trash" style="color: #46494e;"></i></button>
    </div>
    `;

    elementoLista.innerHTML = content;
    //console.log(equipe);
}


let auxiliar = null;

function atualizarEquipe(id){
    const equipe = equipeService.listarEquipesporId(id);

    document.getElementById("nomedaequipe").value = equipe.nome;
    document.getElementById("quantidade").value = equipe.titulares;

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    auxiliar = id;
}

function editarEquipe (){
    const nome = document.getElementById("nomedaequipe").value;
    const titulares = Number (document.getElementById("quantidade").value);

    equipeService.atualizarEquipe(auxiliar,nome,titulares);

    listarEquipes();

    document.getElementById("botaoCadastrar").classList.remove("hidden");
    document.getElementById("botaoEditar").classList.add("hidden");
    document.getElementById("listarEquipeUnica").classList.add("hidden");

    auxiliar = null;
}

function limparInputs(){
    document.getElementById("nomedaequipe").value = "";
    document.getElementById("quantidade").value = "";
}

function deletarEquipe(id){
    equipeService.deletarEquipe(id);

    listarEquipes();

document.getElementById("listarEquipeUnica").classList.add("hidden");
}
