"use strict";
const Some = (v) => ({ kind: 'left', value: v });
const None = () => ({ kind: 'right', value: false });
let x = None();
let y = null;
y + 1;
if (x.kind == 'left') {
    x.value + 1;
}
