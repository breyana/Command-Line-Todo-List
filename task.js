const fs = require('fs')
const add = require('./commands/add')
const list = require('./commands/list')

const command = process.argv[2]
const string = process.argv[3]

switch(command) {
  case "add":
    add(string)
    break;

  case "list":
    list()
    break;
}
