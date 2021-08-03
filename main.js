const btn = document.querySelector('input');
const body = document.querySelector('body');


function chBackcolor(color) {
    document.body.style.background = color;
}



let icecream = document.querySelector('.icecream');
let icecream_body = document.querySelector('.icecream_body');
let drip_big = document.querySelector('.icecream__drip--big');
let drip_midle = document.querySelector('.icecream__drip--midle');
let drip_midle_small = document.querySelector('.icecream__drip--midle--small');
let drip_small = document.querySelector('.icecream__drip--small');


/* btn.addEventListener('change', cambiarColor); */
/* function cambiarColor(){
    let election = btn.value;

    if(election === 'rgb(253,253,137)'){
        icecream.style.background = 'yellow';
    } else if (election === 'rgb(251, 164, 198)'){
        icecream.style.background = 'red';
    } else if (election === 'rgb(144, 210, 253)'){
        icecream.style.background = 'blue';
    }else{
        icecream.style.background = 'green';
    }
} */

function cambiarColor(color){

    console.log(color);


    switch(color){
        case 'rgb(253, 253, 137, 0.581)':
        icecream.style.background = 'yellow';
        drip_big.style.background = 'yellow';
        drip_midle.style.background = 'yellow';
        drip_midle_small.style.background = 'yellow';
        drip_small.style.background = 'yellow';
        icecream_body.style.background = 'rgb(250, 250, 107)';
        break;

        case 'rgb(251, 164, 198, 0.581)':
        icecream.style.background = 'rgb(248, 33, 107)';
        drip_big.style.background = 'rgb(248, 33, 107';
        drip_midle.style.background = 'rgb(248, 33, 107';
        drip_midle_small.style.background = 'rgb(248, 33, 107';
        drip_small.style.background = 'rgb(248, 33, 107'; 
        icecream_body.style.background = 'rgb(260, 150, 178)'; 
        break;
        
        case 'rgb(144, 210, 253, 0.581)':
        icecream.style.background = 'rgb(12, 143, 248)';
        drip_big.style.background = 'rgb(12, 143, 248)';
        drip_midle.style.background = 'rgb(12, 143, 248)';
        drip_midle_small.style.background = 'rgb(12, 143, 248)';
        drip_small.style.background = 'rgb(12, 143, 248)'; 
        icecream_body.style.background = 'rgb(114, 215, 273)'; 
        break;
        
        case 'rgba(164, 243, 127, 0.581)':
        icecream.style.background = 'greenyellow' ;
        drip_big.style.background = 'greenyellow';
        drip_midle.style.background = 'greenyellow';
        drip_midle_small.style.background = 'greenyellow';
        drip_small.style.background = 'greenyellow';
        icecream_body.style.background = 'rgba(164, 243, 127)';  
    }
}