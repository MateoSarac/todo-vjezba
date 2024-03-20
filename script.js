let input = document.getElementById('input-box');
let ul = document.getElementById('list-container');

function addTask(){
    if(!input.value){
        alert("Morate nešto unijeti");
    } else {
        let li = document.createElement('li');
        li.innerText = input.value;
        let span = document.createElement('span');
        span.innerText = 'x';
        li.append(span);
        ul.appendChild(li);
        input.value = '';

        ul.addEventListener("click", function(){
            
        })
    }
};


