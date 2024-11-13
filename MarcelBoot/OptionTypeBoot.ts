// type Sum<a,b> = {kind: 'left',v:a}| {kind:'right', v:b }

// type Option<a> = Sum<a, false>

// const optionA = <a>(v : a):Option<a> => ({kind : 'left', v})

// const optionB = <a>():Option<a> => ({kind : 'right', v : false})


const SumUpTo = (n: number): number => {
    let sum = 0;
    for (let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

const recursive = (n :number): number =>{
    if (n <=0 ) return 0;
    return n+ recursive(n -1);
// 4 
//4+3+2+1+0
}