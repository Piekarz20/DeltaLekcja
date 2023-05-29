const form = document.querySelector('form');
// const a = document.querySelector('#a');
// const b = document.querySelector('#b');
// const c = document.querySelector('#c');
const display = document.querySelector('#display');

const rownanie = document.querySelector('#rownanie');

function delta (a, b, c){
    return b * b - 4 * a * c;
}

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    /*if (isNaN(a.value) || isNaN(b.value) || isNaN(c.value) ){
        display.innerHTML = 'Podaj prawidłowe liczby';
    } else {
        const delta = (b.value*b.value)-(4*a.value*c.value);
    display.innerHTML = delta;
    }*/
    const wspolczynniki = [];
   
   if (isNaN(parseInt(rownanie.value))){
       let a=1;
       wspolczynniki.push(a);
   } else {
     a = parseInt(rownanie.value);
    wspolczynniki.push(a);
       for (let i =0;i<(rownanie.value).lenght;i++){
           if (rownanie.value[i]=='+' || rownanie.value[i]=='-'){
               console.log(parseInt(rownanie.value.substring(i)));
               wspolczynniki.push(parseInt(rownanie.value.substring(i)));
           }
       }
   }
console.log(wspolczynniki[0]);
console.log(wspolczynniki[1]);
console.log(wspolczynniki[2]);
    const wynik = delta(wspolczynniki[0], wspolczynniki[1], wspolczynniki[2]);
    display.innerHTML=wynik;
})
