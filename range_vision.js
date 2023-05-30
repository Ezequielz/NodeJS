
const range_vision = (num) => {

    if ( !num || num % 1 !== 0 || num < 0) return 'Debe introducir un número entero positivo';
    if ( typeof num  !== 'number' ) return 'Solo se puede ingresar números del tipo Number';

    const numStr = String(num);
    let minDigit;
    let minValue;
  
    for (let i = 0; i < numStr.length; i++) {
      const digit = Number(numStr[i]);
      const visionRange = digit;
  
     
      let startCount = i - visionRange;
      if (startCount < 0) startCount = 0;
      
      let endCount = i + visionRange;
      if (endCount >= numStr.length) endCount = numStr.length - 1;
     
      let visionValue = 0
      for (let j = startCount; j <= endCount; j++) {
        if ( j < numStr.length && j !== i) {
          visionValue += Number(numStr[j]);
        };
      };

      if (!minValue  || visionValue <= minValue ) {
        minValue = visionValue;
        minDigit = digit;
      };
    };

    return minDigit === 1;
  }

//   console.log(range_vision(34315));
  module.exports = range_vision;

  
  