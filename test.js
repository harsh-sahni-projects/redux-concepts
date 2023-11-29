let a = -123;
let b = 1234;

function reverse(num) {
    let isNegative = num < 0;
    let string = num.toString();

    let resultStr = '';

    for (let i=string.length-1; i>=0; i--) {
        let char = string[i];
        if (char !== '-')
            resultStr += char;
    }
    let parsed = parseInt(resultStr,10);
    if (isNegative) resultStr = 0 - parsed
    else resultStr = parsed;

    console.log('Reversed:', resultStr);
}

reverse(a);
reverse(b);