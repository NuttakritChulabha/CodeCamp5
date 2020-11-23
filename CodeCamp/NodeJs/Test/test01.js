const os = require('os');
// console.log(os.cpus());
const mem = os.totalmem();
const freeMem =os.freemem();
console.log(os.hostname())
console.log(`total mem: ${mem} , freemem : ${freeMem} , Use : ${mem-freeMem}`);