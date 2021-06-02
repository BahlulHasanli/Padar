const fs = require('fs');
const path = require('path');
const db = require('../connection');
const schema = require('../schema/schema.js');
const { existsControl, nullControl } = require('../utils/utils.js');
const colors = require('colors');

const builder = schema.map(({ tableName, columns, primary_key, exists }) => {
  let line = `CREATE TABLE ${existsControl(exists)} ${tableName} (`;

  const count = columns.length;

  columns.map((col, i) => {
    if (count - 1 === i) {
      return (line += `${col.row} ${col.type} ${nullControl(
        col.void
      )}, CONSTRAINT PK_${primary_key[0]} PRIMARY KEY(${primary_key[1]})`);
    }

    return (line += `${col.row} ${col.type} ${nullControl(col.void)}, `);
  });

  line += `);`;

  return line;
});

const migrate = () => {
  const promisePool = db.promise();

  builder.forEach(
    async (table) =>
      await promisePool
        .query(table)
        .then((_) => {
          fs.appendFileSync(`${path.resolve('migrates')}/migrates.sql`, table);

          console.log(`CREATED: ${table}`.green);
        })
        .catch(({ code, sqlMessage }) => {
          console.log({ code: code, message: sqlMessage });
        })
  );
};

module.exports = migrate;
