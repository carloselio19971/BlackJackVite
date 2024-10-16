import _ from "underscore";

/**
 * 
 * @param {Array<String>} tiposCarta Ejemplo ['C','D','H','S'] 
 * @param {Array<String>} tiposEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, tiposEspeciales) => {
    if(!tiposCarta ||  tiposCarta===0) throw new Error("tipoDeCarta es Obligatorio como un arreglo de String");
    if(!tiposEspeciales ||  tiposEspeciales===0) throw new Error("tiposEspeciales es Obligatorio como un arreglo de String");
 

    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }
    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
