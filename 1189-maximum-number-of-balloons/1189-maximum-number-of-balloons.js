/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let object={}
  for(let letter of text){
    if(!(letter in object)) object[letter]=0
    object[letter]++
  }
  let number=Math.min(object.b, object.a, object.n)
  while(number>0){
    let double=2*number
    if(object.l>=double && object.o>=double) return number
    number--
  }
  return 0
};