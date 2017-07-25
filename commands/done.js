const fs = require('fs');
const readTasks = require('../readTasks.js')

const tasks = readTasks()

const done = (num) => {
  let index = tasks.findIndex((task) => {
    return task.id === +num
  })
  if (index < 0) {
    console.log('ID ' + num + ' does not exist')
  }
  tasks.splice(index, 1)
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks));
}

module.exports = done
