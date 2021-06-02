const existsControl = (exists) => (exists ? 'IF NOT EXISTS' : '');

const nullControl = (exists) =>
  exists && typeof exists !== 'undefined' ? exists : '';

module.exports = { existsControl, nullControl };
