
let nPapagaio=2;
let i=0;
let viradas =0;
let totalcliques = 0;
let arrayDuploN = [];
let pares;
let resposta;

while (nPapagaio<4 || nPapagaio>14 || nPapagaio%2==1)
{
    nPapagaio = prompt("Quantos papagaio você quer?");
    pares = nPapagaio/2;
    console.log(pares);
}

function criaPapagaio()
{
    let template = `<li onclick="revelaPapagaio(this)" class="papagaiobox">
                    <img src="./arquivos/front.png" alt="">
                    ${arrayImg[i]}
                    </li>`;

    let teste = document.querySelector('ul');

    while(i<nPapagaio)
    {
        teste.innerHTML = teste.innerHTML + 
       `<li onclick="revelaPapagaio(this)" class="papagaiobox">
        <img src="./arquivos/front.png" alt="">
        ${arrayDuploN[i]}
        </li>`;
        i++;
    }
}
    //cria array com os 7 papagaios dentro
    let arrayImg = [`<img src="./arquivos/bobrossparrot.gif" alt="">`,
                    `<img src="./arquivos/explodyparrot.gif" alt="">`,
                    `<img src="./arquivos/fiestaparrot.gif" alt="">`,
                    `<img src="./arquivos/metalparrot.gif" alt="">`,
                    `<img src="./arquivos/revertitparrot.gif" alt="">`,
                    `<img src="./arquivos/tripletsparrot.gif" alt="">`,
                    `<img src="./arquivos/unicornparrot.gif" alt="">`,
                    ];
    
    
    let k=0;

    for( let j=0 ; j < (nPapagaio/2); j++)
    {
        arrayDuploN[j+k] = `${arrayImg[j]}`;
        k++;
        arrayDuploN[j+k] = `${arrayImg[j]}`;
    }

    function comparador() { 
        return Math.random() - 0.5; 
    }

//embaralha os papagaio dentro do array
arrayDuploN.sort(comparador);

//cria os papagaio na tela
criaPapagaio();

let revela;

function revelaPapagaio(elemento)
{
    totalcliques++;
    //let contador;

    elemento.classList.add("revelaPapagaio", "virada");
    revela = document.querySelectorAll(".virada");

    //contador = document.querySelector(".caixinha");
    //contador.innerHTML = `Total Cliques: ${totalcliques}`;

    if(revela.length == 2)
    {
        setTimeout(verificaIguais, 1000);
    }
}

function verificaIguais()
{

    if(revela.length == 2)
    {
        if(revela[0].innerHTML === revela[1].innerHTML)
        {
            revela[0].classList.remove("virada");
            revela[1].classList.remove("virada");
            pares--;
            console.log(pares);
            if(pares === 0)
            {
                alert(`Você ganhou com ${totalcliques} cliques!`);
                while(resposta !== 'sim' && resposta !== 'não')
                {
                    resposta = prompt("Você gostaria de recomeçar a partida?");
                }
                if(resposta === 'sim')
                {
                    document.location.reload(true);
                }
            }
        }
        else
        {
        revela[0].classList.remove("revelaPapagaio", "virada");
        revela[1].classList.remove("revelaPapagaio", "virada");
        } 
    }
}

