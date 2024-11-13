console.log("Dybus.ts, ready for action!");

type Sum<a,b> = {kind: 'left', value: a}|{kind: 'right', value: b}
type Option<a> = Sum<a, false>