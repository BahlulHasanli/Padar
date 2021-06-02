#! /usr/bin/env node

const migrate = require('./core/builder');

const args = process.argv.slice(2);

switch (args[0]) {
  case 'create': {
    return migrate();
  }

  default:
    console.log("Sorry, I don't know.");
}
