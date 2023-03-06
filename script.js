var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var list = document.querySelectorAll('li');


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('done');
    })
    addDeleteButton(li);
    ul.appendChild(li);
    input.value = '';
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Clicking on item toggling 'done' on and off

for (i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (event) {
        event.currentTarget.classList.toggle('done');
    });
    addDeleteButton(list[i]);
}

// Delete button 

function addDeleteButton(parent) {
    var buttonElement = parent.appendChild(document.createElement('button'));
    buttonElement.innerHTML = 'delete';
    buttonElement.onclick = function () {
        this.parentElement.remove();
    }
}


button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeyPress);