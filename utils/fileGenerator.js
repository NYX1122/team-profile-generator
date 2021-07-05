const fs = require("fs");

const writeFile = fileContent => {
    fs.writeFileSync("./dist/index.html", fileContent);
};

module.exports = writeFile;