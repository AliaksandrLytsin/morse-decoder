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
  let morse_number = {};
  let decode_str ='';
  for (var key in MORSE_TABLE) {
    let str = '';
    for (let char of key) {            
      if (char == '.') {str += '10'}
        else { str += '11'}
    }
    while (str.length < 10)
      str = '0' + str;
    morse_number[MORSE_TABLE[key]] = str;
  }

  for(let i = 0; i < expr.length; i = i + 10) {
    for (var key in morse_number) {
      if (expr.slice(i , i + 10) == morse_number[key]) {
        decode_str += key;
        break;
      }
      if (expr.slice(i , i + 10) == '**********') {
        decode_str += ' ';
        break;
      }
    }
  }

  return decode_str;
}

module.exports = {
    decode
}