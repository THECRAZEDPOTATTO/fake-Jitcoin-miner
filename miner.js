const crypto = require('crypto');
const alice = crypto.getDiffieHellman('modp5');
const bob = crypto.getDiffieHellman('modp5');
const fs = require('fs');
while (true){
var core = 1//hash langth 
var id = crypto.randomBytes(core).toString('hex');
var startTime = performance.now()
var hash = crypto.randomBytes(core).toString('hex');
if(hash===id){
  function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
  var endTime = performance.now()
  var price =   between(1, 200)
  console.log('\x1b[1m\x1b[32m')
  console.log('Jitcoin Found:'+id),console.log(`Time: ${endTime - startTime} milliseconds`),console.log("Coin Amount: "+"$"+price)
 }
}

