const fs = require('fs')

let cli_text = process.argv.slice(2).toString()

fs.writeFileSync('writeContent.txt', cli_text)
console.log('The file was saved')