/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let carry = 1;
    let i = digits.length - 1;
    
    while (i > 0) {

        let val = digits[i] + carry;
        if (val > 9) {
            digits[i] = 0
            carry = 1;
        } else {
            digits[i] = digits[i] + carry;
            carry = 0;
        }
        i--;
    }
    
    if (digits[0] + carry > 9) {
        digits[0] = 0;
        digits.unshift(1);
    } else {
        digits[0] = digits[0] + carry;
    }
    
    return digits;
  
};

   // let length=digits.length-1
   // if(digits[length]===9){
   //     digits[length-1]=digits[length-1]+1
   //     digits[length]=0
   // }else{
   //     digits[length]=digits[length]+1
   // }
   //  return digits