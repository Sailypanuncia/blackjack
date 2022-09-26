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
  
}