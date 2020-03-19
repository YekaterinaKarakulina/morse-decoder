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
    var result = [];

    for (var i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }
    arr.forEach(el => {
        if(el=='**********') {
            arrWithoutFirstZeros.push('*'); 
        } else {
            arrWithoutFirstZeros.push(el.match(/(((10)|(11))+)/)[0]);
        }
    })
    arr = [];   // empty array for array with morse symbols
    arrWithoutFirstZeros.forEach(el => {
        arr.push(el.replace(/(10)/g, '.').replace(/(11)/g, '-'));
    })
    arr.forEach(el => {
        if(typeof(MORSE_TABLE[el]) == 'undefined') {
            result.push(' ');
        } else {
             result.push(MORSE_TABLE[el]);
        }
    })
    return result.join('');
}
module.exports = {
    decode
}