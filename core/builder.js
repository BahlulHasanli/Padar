const { appendFileSync } = require('fs');
const { resolve } = require('path');
const { existsControl, nullControl } = require('../utils/utils.js');
const { format } = require('sql-formatter');
const db = require('../connection');
const schema = require('../schema/schema.js');

require('colors');

const builder = schema.map(
  ({ tableName, columns, primary_key: [CONSTRAINT, KEY], exists }) => {
    let table = `CREATE TABLE ${existsControl(exists)} ${tableName} (`;

    const _length = columns.length;

    columns.map((col, i) => {
      try {
        if (_length - 1 === i)
          return (table += `${col.row} ${col.type} ${nullControl(
            col.void
          )}, CONSTRAINT ${CONSTRAINT} PRIMARY KEY(${[KEY]})`);

        return (table += `${col.row} ${col.type} ${nullControl(col.void)}, `);
      } catch (err) {
        console.log(`PADAR ERROR :>> ${err.message}`.bgRed);
      }
    });

    table += `);`;

    return {
      table,
      tableName,
    };
  }
);

module.exports = () => {
  const _POOL = db.promise();

  const _length = builder.length;

  builder.map(async ({ table, tableName }, i) => {
    const query = format(table);

    try {
      await _POOL
        .query(query)
        .then(() => {
          appendFileSync(`${resolve('migrates')}/migrates.sql`, format(table));

          console.log(
            `PADAR SUCCESS :>> Table '${tableName}' created successfully`
              .bgGreen
          );
        })
        .catch((err) => console.log(`PADAR ERROR :>> ${err.message}`.bgRed))
        .finally(() => console.log(`-----`));

      if (_length - 1 === i) await _POOL.end();
    } catch (err) {
      console.log(`PADAR ERROR :>> ${err.message}`.bgYellow);
    }
  });
};
