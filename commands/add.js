const fs = require('fs')
let tasks = JSON.parse(fs.readFileSync('./tasks.json', 'utf8'))

const add = (newTask) => {
  let toDo = {}
  toDo.task = newTask
  toDo.id = tasks.length + 1
  tasks.push(toDo)
  console.log(`Created task ${toDo.id}.`)
  return JSON.stringify(tasks)
}

fs.writeFileSync('./tasks.json', add(process.argv[3]))
