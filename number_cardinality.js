

const number_cardinality = (num) => {

    if ( !num || num % 1 !== 0) return 'Debe introducir un número entero';
    if ( typeof num  !== 'number' ) return 'Solo se puede ingresar números del tipo Number';

    if (num % 10 === 0) {
        return 'zero';
      } else if (num % 10 === 5) {
        return 'five';
      } else if (num % 2 === 0) {
        return 'even';
      } else {
        return 'odd';
      }
};

// console.log(number_cardinality(99));
module.exports = number_cardinality;


