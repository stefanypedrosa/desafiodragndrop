function pegaItem(evt){
    evt.dataTransfer.setData("tarefas",evt.target.id);
}

function habilitaArrastar(evt){
    evt.preventDefault();
}

function recebeItem(evt){
    var idTarefa = evt.dataTransfer.getData("tarefas");
    var tarefa = document.getElementById(idTarefa);
    if (evt.target.id === "pendentes" || evt.target.id === "feitas" || evt.target.id === "fazendo"){
       evt.target.appendChild(tarefa);
    }
}

function buscaTarefas(){
    fetch("http://www.professorisidro.com.br/tarefas.php",{"method":"GET"})
      .then(response => response.json())
      .then(json => mostraTarefa(json));
}

function mostraTarefa(json){
    var qtde = document.getElementById("qtde").value;
    var task;
    var num;
    for(i=0; i<qtde; i++){
        num++;
        task = json[i];
        document.getElementById("pendentes").innerHTML += '<div class="itemTarefa" draggable="true" ondragstart="pegaItem(event);" id="t'+ num +'">'+ task.nome + " (" + task.responsavel + ")" +'</div>';
    }
}