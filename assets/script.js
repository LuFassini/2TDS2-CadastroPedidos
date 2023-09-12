class pedido{
    constructor(cliente,mesa,descricao){
    this.id = this.gerarId();
    this.cliente = cliente;
    this.mesa = mesa;
    this.descricao = descricao;
    
}
gerarId(){
    return Math.floor(Math.random() * 1000);
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
        return this.pedidos;
    }
    
    listarPedidosporId(parametro){
        return this.pedidos.find((pedido) => pedido.id == parametro);
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

    if (verificarInputs()) {
        sendMSG("Preencha todos os campos!", "error");
    }  else {
        const pedido = new Pedido (cliente, mesa, descricao);
        this.pedidos.push(pedido);
        sendMSG("Pessoa adicionado ao sistema!", "success");
        clearInputs();
    }
   
}

function listarPedidos (){
    const pedidos = pedidoService.listarPedidos();


    const elementoLista = document.getElementById("listarPedidos");
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
    document.getElementById("listarPedidoUnico").classList.remove("hidden");
    let elementoLista = document.getElementById("listarPedidoUnico");
    
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
    
}


let auxiliar = null;

function atualizarPedido(id){
    const pedido = pedidoService.listarPedidosporId(id);

    document.getElementById("nomedocliente").value = pedido.cliente;
    document.getElementById("mesa").value = pedido.mesa;
    document.getElementById("descricao").value = pedido.descricao;

    document.getElementById("botaoCadastrar").classList.add("hidden");
    document.getElementById("botaoEditar").classList.remove("hidden");

    auxiliar = id;
}

function editarPedido (){
    const cliente = document.getElementById("nomedocliente").value;
    const mesa = Number (document.getElementById("mesa").value);
    const descricao = document.getElementById("descricao").value;

    pedidoService.atualizarPedido(auxiliar,cliente,mesa,descricao);

    listarPedidos();

    document.getElementById("botaoCadastrar").classList.remove("hidden");
    document.getElementById("botaoEditar").classList.add("hidden");
    document.getElementById("listarPedidoUnico").classList.add("hidden");

    auxiliar = null;
}

function limparInputs(){
    document.getElementById("nomedocliente").value = "";
    document.getElementById("mesa").value = "";
    document.getElementById("descricao").value = "";
}

function deletarPedido(id){
    pedidoService.deletarPedido(id);

    listarPedidos();

document.getElementById("listarPedidoUnica").classList.add("hidden");
}

function verificarInputs() {
    const cliente = document.getElementById("nomedocliente").value;
    const mesa = document.getElementById("mesa").value;
    const descricao = document.getElementById("descricao").value;
    
    if (cliente== "" || mesa == "" || descricao == "") {
        return true;
    } else {
        return false;
    }
}
function limparInputsInputs() {

    document.getElementById("nomedocliente").value = '';
    document.getElementById("mesa").value = '';
    document.getElementById("descricao").value = '';
}

function sendMSG(msg, type) {

    const msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    const msgP = `
            <p class="${type}">${msg}</p>
        `;

    msgDiv.innerHTML += msgP;

    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}

