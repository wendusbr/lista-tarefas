var i=0;

function AddNewTask(){
    var list = document.getElementById('list');
    var text = document.getElementById('taskName').value;

    if(text.length == 0){
        window.alert('Error: Campo vazio');
        console.log('Error: Campo vazio')
        return;
    }

    var inputId = 'checkbox' + i;
    var listItem = `
        <li id="${i}" class="list-item"><input id="${inputId}" type="checkbox" class="checkbox">${text}</li>
    `;
    list.innerHTML += listItem;

    document.getElementById('taskName').value = '';
    i++;
}

function RemoveTasks(){
    for(var j=0; j<i; j++){
        if(document.getElementById(j).innerHTML != '' && document.getElementById('checkbox'+j).checked)
            document.getElementById(j).innerHTML = '';
    }
}

function ChangeTheme(color, type){
    document.body.style.color = color;
    document.getElementById('list').style.boxShadow = '0 0 2px ' + color;
    document.getElementById('taskName').style.borderColor = color;
    document.getElementById('addTask').setAttribute('class', 'add-task-button-' + type);

    var links = document.querySelectorAll('a');
    // Muda classe de todos os links <a>
    for (var j = 0; j < links.length; j++) {
        links[j].setAttribute('class', 'nav-item-' + type);
    }

    // Altera imagem
    document.getElementById('centralImage').setAttribute('src', 'assets/img/' + type + '.png')
}