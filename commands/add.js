const fs = require('fs')
const tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

const add = (newTask) => {
  if (!newTask) {
    console.warn("Please add a task name")
    return
  }
  let toDo = {}
  const id = () => tasks.length !== 0 ? tasks[tasks.length - 1].id + 1 : 1
  toDo.id = id()
  toDo.task = newTask
  tasks.push(toDo)
  console.log(`Created task ${toDo.id}.`)
  fs.writeFileSync('./tasks.json', JSON.stringify(tasks))
}

module.exports = add
