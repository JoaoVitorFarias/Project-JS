const cryto = require('cryto');

export default function genereteUiqueId(){
  return crypto.randomBytes(4).toString('HEX');
}