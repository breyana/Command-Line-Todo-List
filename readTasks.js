const fs = require('fs')

function readTasks() {
  return JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))
}

module.exports = readTasks
