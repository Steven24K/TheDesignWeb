"use strict";
function handlesum(value) {
    if (value.kind === 'left') {
        console.log("Number:", value.v);
    }
    else if (value.kind === 'right') {
        console.log("String:", value.v);
    }
}
// Voeg de Option Type toe 
// Voeg twee contructor methods toe Some en None
// handlesum({kind:'left',v:12})
// handlesum({kind:'right',v:'Hi'})
