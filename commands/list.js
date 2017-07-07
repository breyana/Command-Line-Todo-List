const fs = require('fs')
const tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

const list = () => {
  const longestID = Math.max.apply(null, tasks.map(task => task.id.toString().length))

  if (longestID < 1) {
    console.log("There are no tasks.")
    return
  }

  console.log("ID" + " ".repeat(longestID) + "Description")
  console.log("-".repeat(longestID + 1) + " " + "-".repeat(11))
  tasks.forEach((task) => {
    console.log(task.id + " ".repeat(longestID + 2 - task.id.toString().length) + task.task)
  })
}

module.exports = list
