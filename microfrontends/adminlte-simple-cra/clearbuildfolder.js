const fs = require('fs')
const buildDir = __dirname + "/build/"
console.log(`cleaning ${buildDir}`);

["dist", "fonts", "plugins"].forEach((dir) => {
    console.log(`removing ${dir}`);
    fs.rmSync(buildDir + dir, {force: true, recursive: true})
})

