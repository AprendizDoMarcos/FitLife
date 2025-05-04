var menu = document.querySelector('.sidebar')
var botao = document.querySelector('#botao')
function AbrirMenu(){
    var titulo = document.getElementById('h3').innerHTML 
    if (titulo == "FD"){
        document.getElementById('h3').innerHTML = ":F i t n e s s <br> D a s h b o a r d"
    }else if(titulo == ":F i t n e s s <br> D a s h b o a r d"){
        document.getElementById('h3').innerHTML = "FD"
    }
    menu.classList.toggle('ativo')
}
botao.addEventListener('click', AbrirMenu)
