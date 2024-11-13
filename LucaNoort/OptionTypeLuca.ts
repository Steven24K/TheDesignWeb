type Sum<a, b> = {kind: 'left', value: a} | {kind: 'right', value: b}

type Option<a> = Sum<a, false>
const Some = <a>(v: a): Option<a> => ({kind: 'left', value: v})
const None = <a>(): Option<a> => ({kind: 'right', value: false})

let x: Option<number> = None()
let y: number = null!

y + 1

if (x.kind == 'left') {
    x.value + 1
}
