let n=2;

while (n<4 || n>14)
{
    n = prompt("Quantos papagaio você quer?");
}

let i=0;

let teste = document.querySelector('main');
let teste2 = document.querySelector('.container');

while(i<n)
{
    teste.innerHTML = teste.innerHTML + teste2.innerHTML;
    i++;
}
