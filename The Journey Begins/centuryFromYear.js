function solution(year) {
    if(year >= 1 || year <= 2005) {
        if(year%100 ==0){
            return parseInt(year/100)
        }else {
            return parseInt((year/100)+1)
        }
    }
}
