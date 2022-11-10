/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // let array=[]
    // for(let i=0; i<nums.length; i++){
    //     array.push(nums.filter((num,index)=>index!==i))
    // }
    // console.log(array)
    // let multiple=1
    // let answer=[]
    // for (let i=0; i<array.length; i++) {
    //         multiple = multiple * array[i];
    // } 
    // answer.push(multiple)
    // let answer=[]

    // let j=0
    // let multiple=1
    // for(let i=0;i<nums.length;i++){
    //     if(j<nums.length && i!==j){
    //         multiple=multiple*nums[j]
    //         j++
    //         i--
    //     }
    //     else if(j===i){
    //         j++
    //         i--
    //     }
    //     else {
    //         answer.push(multiple)
    //         j=0
    //         multiple=1
    //     }
        
    // }
    // return answer


    let answer = [];
    let leftMult = 1;
    let rightMult = 1;
    for (let i=nums.length - 1; i >= 0; i--) {
        answer[i] = rightMult;
        rightMult *= nums[i];
    }
    //answer[3] = 1, rightMult = 1*nums[3] = 4 = 4
    //answer[2] = 4, rightMult = 4*nums[2] = 3 = 12
    //answer[1] = 12, rightMult = 12*nums[1] = 2 = 24
    //answer[0] = 24, rightMult = 24*nums[0] = 1 = 24
    for (let j=0; j < nums.length; j++) {
        answer[j] *= leftMult;
        leftMult *= nums[j];
    }
    //answer[0] = 24*leftMult(1) = 24, leftMult*=nums[0](1) = 1
    //answer[1] = 12*leftMult(1) = 12, leftMult(1)*nums[1](2) = 2
    //answer[2] = 4*leftMult(2) = 8, leftMult(2)*nums[2](3) = 6
    //answer[3] = 1*leftMult(6) = 6, leftMult(6)*nums[3](4) = 24
    return answer
};


    // let array=[]

    // let answer=[]
    // for(let i=0; i<nums.length; i++){
    //     array=nums.filter((num,index)=>index!==i)
    //         let multiple=1
    //     for (let i=0; i<array.length; i++) {
    //         multiple = multiple * array[i];
    // } 
    // answer.push(multiple)
    // }
    // return answer;