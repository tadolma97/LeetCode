/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let difference=Infinity

   for(let i=0;i<nums.length-2; i++){
       let j=i+1
       let k=nums.length-1
       while(j<k){
           let sum=nums[i]+nums[j]+nums[k]
           if(Math.abs(target-sum)<Math.abs(target-difference)){
               difference=sum
             
           }
           if(sum>target){
               k--
           }
           else{
               j++
           }
           
           
       }

   } 
    return difference
};