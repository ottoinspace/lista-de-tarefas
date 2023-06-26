const inputTarefas = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('.btnAddTarefas');
const tarefa = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefas.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefas.value) return;
        criaTarefa(inputTarefas.value);  
    }
})

function limpaInput() {
    inputTarefas.value = '';
    inputTarefas.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefa.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas
}

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
});