const todos = [
  {
    title: 'wake up',
    description: 'After waking up do some push ups',
    priority: 'LOW',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'make the taskforce project',
    description: 'using node js create a project called taskforce',
    priority: 'HIGH',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'go to school',
    description: 'after taking a little break go to school',
    priority: 'MEDIUM',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Todos', todos, {});
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Todos', null, {});
  },
};
