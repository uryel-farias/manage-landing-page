const btnMobile = document.getElementById('btn-mobile');



function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);




const btnSlide = document.querySelectorAll('.manual-btn');

function ativarClasse(elementoDiv){
    btnSlide.forEach((divs) => { //faz um loop pelo array removendo a classe ativar dos itens 
        divs.classList.remove('ativar');
    })

    const elemento = elementoDiv.currentTarget;
    elemento.classList.add('ativar');

}

function ativarBtn(btn){
    btn.addEventListener('click', ativarClasse);
}

btnSlide.forEach(ativarBtn);



const botaoForm = document.querySelector(".form-btn");
const emailCheck = document.querySelector(".input").value;
const email = document.querySelector(".email");
const teste = /^[\w._-]+@[\w_.-]+\.[\w]/;

function validarEmail(){
    console.log(emailCheck.match(emailCheck));
    if (emailCheck.match(teste)){
        email.classList.remove("valido");
    }else{
        email.classList.add("valido");
    }
}

botaoForm.addEventListener('click', validarEmail);








