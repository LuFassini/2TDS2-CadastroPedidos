//alert("testando!");

class pedido{
    constructor(cliente,mesa,descricao){
    this.id = this.gerarId();
    this.cliente = cliente;
    this.mesa = mesa;
    this.descricao = descricao;
    this.reservas = this.calcularReservas();
    this.totalJogadores = this.calcularTotaldeJogadores();
}
gerarId(){
    return Math.floor(Math.random() * 1000);
}

//calcularReservas(){
   // return Math.floor (this.titulares / 2);
//}

//calcularTotaldeJogadores(){
   // return this.titulares + this.reservas
//}
}

class pedidoService {
    constructor(){
        this.pedidos = [];
    }
    //CRUD = create, read, update ,delete
    //C = create
    
    adicionarPedido(parametro){
        this.pedidoss.push(parametro);
    }
    listarPedidos(){
        return this.pedidoss;
    }
    //R=read
    listarPedidosporId(parametro){
        return this.pedidoss.find((pedido) => pedido.id == parametro);
    }

    //U= update
    //atualizar = EDITAR
    editarpedido(id,cliente,mesa,descricao){
        const pedido = this.listarPedidossporId(id);

        pedido.cliente = cliente;
        pedido.mesa = mesa;
        pedido.descricao = descricao;
        //equipe.reservas = equipe.calcularReservas();
        //equipe.totalJogadores = equipe.calcularTotaldeJogadores();

        return equipe;
        
    }

    //D= delete
    deleteEquipe(parametro){
        return (this.equipes = this.equipes.filter
            ((equipe) => equipe.id != parametro
    ));
};
}

const equipeService = new EquipeService();

function criarEquipe() {
    const nome = document.getElementById("nomedaequipe").value;
    const titulares = Number (document.getElementById("quantidade").value);

    const novaEquipe = new equipe (nome,titulares);

    equipeService.adicionarEquipe(novaEquipe);
    
    listarEquipes();
    limparInputs();
   
    //console.log(equipeService.equipes);
    //console.log(novaEquipe);
    //alert("Nome da equipe:" + nome + "nQuantidade de titulares:" + quantidade!);
}

function listarEquipes (){
    const equipes = equipeService.listarEquipes();


    const elementoLista = document.getElementById("listarEquipes");
    elementoLista.innerHTML = "";


    let content = "";
    
    equipes.forEach((equipe) => {
        content += `
        <div onclick="listarEquipesporId(${equipe.id})">
        <p>Nome: ${equipe.nome} </p>
        </div>
       `;
    });
    
    elementoLista.innerHTML = content;
    //console.log(equipes);
}



function listarEquipesporId (id){
    const equipe = equipeService.listarEquipesporId(id);
    document.getElementById("listarEquipeUnica").classList.remove("hidden");
    const elementoLista = document.getElementById("listarEquipeUnica");
    
    elementoLista.innerHTML = "";

    let content = `
    <div>
        <p>Id: ${equipe.id}</p>
        <p>Nome: ${equipe.nome}</p>
        <p>Total de Jogadores: ${equipe.totalJogadores}</p>
        <p>Titulares: ${equipe.titulares}</p>
        <p>Reservas: ${equipe.reservas}</p>
        <button onclick ="atualizarEquipe(${equipe.id})"> Editar </button>
        <button onclick ="deletarEquipe(${equipe.id})"> Deletar </button>
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
