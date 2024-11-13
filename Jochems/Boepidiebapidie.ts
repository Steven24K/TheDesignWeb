type Sum<a,b> = {kind:"left", v : a}|{kind:"right", v : b}

type Option <a> = Sum<a , false>

const Some  = <a> (v:a): Option<a> => ({kind:"left", v:v});

const None  = <a>(): Option<a> => ({kind:"right", v:false});

let x: Option<number> = Some(5);
let y: Option<number> = None();

const RecursiveSum = (n: number): number => {
    if (n == 0) return 0;

    return n + RecursiveSum(n-1)    
}