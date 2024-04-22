// onclick function
function showdown(){
    document.querySelector('.box').value = word;
}

let Dropdown = document.querySelector('.dropdown-box')
Dropdown.onclick = function(){
    Dropdown.classList.toggle('active');
}