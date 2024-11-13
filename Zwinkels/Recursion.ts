const RecSumUpTo = (n: number): number =>{
    if(n <= 0){
        return 0
    }
    return n + RecSumUpTo(n-1)
}