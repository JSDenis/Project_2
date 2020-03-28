/* document.getElementById('id12');
document.getElementsByClassName('jkashdk');
document.getElementsByTagName('br');
document.querySelector('#class123');
document.querySelectorAll('.cghgq123'); */


document.getElementById('burger').onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('menu').classList.toggle('show'); //toggle delete and add menu
}

