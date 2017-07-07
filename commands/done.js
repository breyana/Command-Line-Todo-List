const fs = require('fs');
const readTasks = require('../readTasks.js')

const tasks = readTasks()

const done = (num) => {
  try {
    let index = tasks.findIndex((task) => {
      return task.id === +num
    })
    if (index < 0) {
      throw new Error()
    }
    tasks.splice(index, 1)
    fs.writeFileSync('./tasks.json', JSON.stringify(tasks));
    }
  catch(error) {
    console.log('ID ' + num + ' does not exist')
  }
}

module.exports = done
