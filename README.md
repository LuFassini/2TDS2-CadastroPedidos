<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../">
    <title> Cadastro de Pedidos </title>
</head>
<body>
    <h2> Cadastro de Pedidos </h2>

    <div>
        <label for="">Nome da Equipe</label>
        <input id="nomedaequipe" type="text">

        <label for="">Jogadores Titulares</label>
        <input id="quantidade" type="number">
    </div>

    <button id="botaoCadastrar" onclick=" criarEquipe()"> Cadastrar </button>
    <button id="botaoEditar" class="hidden" onclick="editarEquipe()"> Editar </button>


    <div id="listarEquipes"></div>
    <div id="listarEquipeUnica"></div>

    <script src="../11- CRUD/assets/script.js"></script>
</body>
</html>