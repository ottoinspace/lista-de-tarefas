const inputTarefas = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('.btnAddTarefas');
const tarefa = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefa.appendChild(li);
}

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
});