const types = {
  autoincrement: () => 'INT AUTO_INCREMENT',
  varchar: (int) => `VARCHAR(${int})`,
  int: (int) => `VARCHAR(${int})`,
  notnull: () => `NOT NULL`,
};

module.exports = types;
