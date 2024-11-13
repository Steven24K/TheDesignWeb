"use strict";
const Some = (v) => {
    return { kind: 'left', value: v };
};
const None = () => {
    return { kind: 'right', value: false };
};
