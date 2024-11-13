type Sum<a,b>={kind:'left',v:a}|{kind:'right',v:b}

function handlesum(value: Sum<number,string>)
{
    if (value.kind === 'left'){console.log("Number:",value.v)}
    else if (value.kind === 'right'){console.log("String:", value.v)}
}

handlesum({kind:'left',v:12})
handlesum({kind:'right',v:'Hi'})

