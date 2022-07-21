//--in build MODULES
const os = require('os');

// info about current user
console.log(os.userInfo());


// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS= {
    nam : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem()
};

console.log(currentOS);

