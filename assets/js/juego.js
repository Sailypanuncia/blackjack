/* 
2C trebol
2D diamantes
2H corazon
2S espadas o picos
  */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//esta funcion crea una nueva baraja, es decir, baraja las cartas
const crearDeck = () =>{
    for(let i=2; i<=10; i++) {
       for(let tipo of tipos) {
        deck.push(i + tipo);
       }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// esta funcion me permite tomar una carta
const pedirCarta = ()=>{
  if(deck.length === 0){
    throw 'No hay cartas en el deck';
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta); // la carta debe ser de la baraja, debe ser del arreglo y luego dejar de existir en ese arreglo
  return carta;
}

const valorCarta = (carta)=>{
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
          (valor === 'A') ? 11 : 10
        : valor * 1;
}

const valor = valorCarta(pedirCarta());
console.log(valor);










