/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(num => Number(num))
    const v2 = version2.split('.').map(num => Number(num))
    const diff = Math.abs(v1.length - v2.length);
    if(v1.length > v2.length) {
        v2.push(...new Array(diff).fill(0));
    } else {
        v1.push(...new Array(diff).fill(0));
    }
    for(let i = 0; i < v1.length; i++) {
        if(v1[i] > v2[i]) return 1;
        else if(v1[i] < v2[i]) return -1;
    }
    
    return 0;
};