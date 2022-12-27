/* script para o menu*/

const menuHamburger = document.getElementById('menu-hamburger');

function menuAparece(){
    const nav = document.getElementById('navegar2');
    nav.classList.toggle('active');
}

menuHamburger.addEventListener('click', menuAparece);


/* script para o carrossel */
setInterval(carrossel, 3000)

function troca1(){
    document.getElementById('s1').style.marginLeft = "-20%";
}
function troca2(){
    document.getElementById('s2').style.marginLeft = "-20%";
}
function troca3(){
    document.getElementById('s1').style.marginLeft = "0%"
}
function troca4(){
    document.getElementById('s2').style.marginLeft = "0%"
}

let i = 0;
function carrossel(){
    if(i===0)
    {
        troca1();
        i++;
    }
    else if(i===1)
    {
        troca2();
        i++;
    }
    else if(i===2)
    {
        troca3();
        i++;
    }
    else if(i===3)
    {
        troca4();
        i = 0;
    }

}

function alertaDeEnvio(){
    alert("Dados enviados com sucesso! Verifique seu email para mais informações :)")
}
