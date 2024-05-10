function solution(inputArray) {
    
    let max = -Infinity;
    
    for(let i = 0 ; i < inputArray.length ; i++) {
        let res = inputArray[i]*inputArray[i - 1];
        
        if(res > max) {
            max = res
        }
    }
    
    return max
}