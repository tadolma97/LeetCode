/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count=0
    let cont=0
    for(let i=0;i<flowerbed.length;i++){

        if(flowerbed[i]===1){
            let add=Math.floor((cont-1)/2)
            if(add>0) count+=add
            cont=0
        }else if(i===flowerbed.length-1){
            if(flowerbed[i]===0){
                cont++
                let add=Math.floor(cont/2)
                if(add>0) count+=add
            }
        }
        else{
            if(i===0) cont+=1
            cont++
        }
    }
    if(flowerbed.length===1 && flowerbed[0]===0 && n===1) return true
    if(n<=count) return true
    else return false
}
        
        
    //     if(flowerbed[i]===1) continue
    //     else if(flowerbed[i]===0 && (flowerbed[i+1]===0||i===(flowerbed.length-1)) && (flowerbed[i-1]===0||i===0)){
    //         count++
    //     }
    // }
    // console.log(count)
    // count=Math.ceil(count/2)
    // if(n<=count) return true
    // else return false
;