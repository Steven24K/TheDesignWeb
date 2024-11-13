console.log("Dybus.ts, ready for action!");

// type Sum<a,b> = {kind: 'left', value: a}|{kind: 'right', value: b}

// type Option<a> = Sum<a, false>
// const Some = <a>(v: a): Option<a> => ({kind: 'left', value: v})
// const None = <a>(): Option<a> => ({kind: 'right', value: false})

// let x: Option<number> = None()
// let y: number = null!

// y + 1

// if (x.kind == 'left') {
//     x.value + 1
// }


const sumUpTo = (n: number): number => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

const recursiveSumUpTo = (n: number): number => {
    if (n == 0) {
        return 0;
    }
    return n + recursiveSumUpTo(n - 1);
};


(5 +                        // 5
    (4 +                    // 9
        (3 +                // 12
            (2 +            // 14
                (1 +        // 15
                    (0)     // 15
                )
            )
        )
    )
)