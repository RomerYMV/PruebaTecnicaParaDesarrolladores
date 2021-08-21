var inCasco = document.querySelector('.inputCasco'),
    inArnes = document.querySelector('.inputArnes'),
    inCalzado = document.querySelector('.inputCalzado'),
    inCuerda = document.querySelector('.inputCuerda'),
    inGancho = document.querySelector('.inputGancho'),
    sumarTodo = document.querySelector('.sumarTodo');

var pesoTotal = 0, calTotal = 0;

var printPesototal = document.querySelector('.printPesoTotal'),
pesoViable = document.querySelector('.pesoViable');

var printCalTotal = document.querySelector('.printCalTotal'),
calViable = document.querySelector('.calViable');

sumarTodo.addEventListener('click', () =>{
    if(inCasco.checked){
        pesoTotal = pesoTotal + 5;
        calTotal = calTotal + 3;
    }
    if(inArnes.checked){
        pesoTotal = pesoTotal + 3;
        calTotal = calTotal + 5;
    }
    if(inCalzado.checked){
        calTotal = calTotal + 2;
        pesoTotal = pesoTotal + 5;
    }
    if(inCuerda.checked){
        calTotal = calTotal + 8;
        pesoTotal = pesoTotal + 1;
    }
    if(inGancho.checked){
        calTotal = calTotal + 3;
        pesoTotal = pesoTotal + 2;
    }
    console.log('Pes'+pesoTotal+' Cal:'+calTotal);

    printCalTotal.innerHTML = calTotal;
    printPesototal.innerHTML = pesoTotal;

    if(pesoTotal > 10)pesoViable.innerHTML = 'no ';

    if(calTotal < 15)calViable.innerHTML = 'no ';

    pesoTotal = 0;
    calTotal = 0;
})