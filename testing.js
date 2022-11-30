'use strict'
if (typeof module!='undefined' && module.exports) var Aes = require('./AES implementation in JavaScript'); // CommonJS (Node.js)
if (typeof module!='undefined' && module.exports) Aes.Ctr = require('./AES Counter-mode implementation in JavaScript'); // CommonJS (Node.js)

let x = Aes.Ctr.encrypt('big secret', 'password', 256);
console.log('Aes.Ctr.encrypt: ' + x.base64Decode()); // encr: 'lwGl66VVwVOb

let y = Aes.Ctr.decrypt('lwGl66VVwVObKIr6of8HVqJr', 'pāşšŵōřđ', 256);

console.log('Aes.Ctr.decrypt: ' + y); 
// decr: 'big secret'