/* 
2C trebol
2D diamantes
2H corazon
2S espadas o picos
  */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');
const puntosHTML = document.querySelectorAll('small');

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
  
  return carta;
}

const valorCarta = (carta)=>{
  const valor = carta.substring(0, carta.length - 1);
  return (isNaN(valor)) ?
          (valor === 'A') ? 11 : 10
        : valor * 1;
}

//Eventos
btnPedir.addEventListener('click', ()=>{
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add('carta');
  divCartasJugador.append(imgCarta);

  
});










