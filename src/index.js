const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var arr = [];
    var arrWithoutFirstZeros = [];
    var arrWithMorzeSymbols = [];
    var element;
    var result = [];

    for (var i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }
    for(var j=0; j<arr.length; j++)
    {
        if(arr[j]=='**********') {
            arrWithoutFirstZeros.push('*'); 
        } else {
            element = arr[j].match(/(((10)|(11))+)/)[0];
            arrWithoutFirstZeros.push(element);
        }
    }
    for(var k=0; k<arrWithoutFirstZeros.length; k++)
    {
        element = arrWithoutFirstZeros[k].replace(/(10)/g, '.').replace(/(11)/g, '-');
        arrWithMorzeSymbols.push(element);
    }
    for(var l=0; l<arrWithMorzeSymbols.length; l++)
    {
        if(typeof(MORSE_TABLE[arrWithMorzeSymbols[l]]) == 'undefined') {
            result.push(' ');
        } else{
             result.push(MORSE_TABLE[arrWithMorzeSymbols[l]])
        }
    }
    return result.join('');
}

module.exports = {
    decode
}
