type Sum<a,b>={kind:'left',value:a}|{kind:'right',value:b}
type Option<a> = Sum<a, false>

const Some = <a>(v:a) : Option<a> => ({kind:'left', value:v})
const None = <a>() : Option<a> => ({kind:'right', value:false})


// toepassing
const x: Option<number> = Some(42);
const y: Option<number> = None();

console.log(x);
console.log(y); 

function printOptionValue<a>(opt: Option<a>): void {
    if (opt.kind === 'left') {
        console.log("Value is:", opt.value); 
    } else {
        console.log("No value present"); 
    }
}

printOptionValue(x);
printOptionValue(y);


// opdracht 2
const sumupto = (n: number) : number =>
{
    if (n < 0){return 0;}
    return n + sumupto(n-1)
}

console.log(sumupto(5))