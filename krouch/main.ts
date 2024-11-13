console.log('this')

type Sum<a, b> = { kind: 'left', v: a} | {kind: 'right', v: b}

const leftie: Sum<5, null> = {kind: 'left', v: 5}

type Option<a> = Sum<a, null>

const example: Option<4> = { kind: "left", v: 4}

console.log(leftie)