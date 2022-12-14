/**
 * Esta función extrae el substring de una carta y la evalua
 * @param { String } carta Ejemplo: '5'
 * @returns { Number }  retorna una carta Ejemplo: 5
 */

export const valorCarta = ( carta ) => {
 
    const valor = carta.substring(0, carta.length - 1);
    
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : Number(valor); // esto lo convierte en number
}