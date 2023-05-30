

const fizz_buzz = (num) => {

    if ( !num || num % 1 !== 0) return 'Debe introducir un número entero';
    if ( typeof num  !== 'number' ) return 'Solo se puede ingresar números del tipo Number';
    

    let array = [];

    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5  === 0) {
            array.push("FizzBuzz");
        } else if(i % 3 === 0) {
            array.push("Fizz");
        } else if(i % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(i);
        }
    };

    return array;
};


// console.log(fizz_buzz(15));
module.exports = fizz_buzz;


