#! /usr/bin/env node

const migrate = require('./core/builder');

const [PADAR] = process.argv.slice(2);

switch (PADAR) {
  case 'create': {
    return migrate();
  }

  default:
    console.log("Sorry, I don't know.");
}
