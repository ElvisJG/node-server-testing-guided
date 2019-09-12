const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('The Hobbit Model', () => {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('the insert function', () => {
    test('should insert a new hobbit', async () => {
      // test setup
      const hobbitData = { name: 'frodo' };
      await Hobbits.insert(hobbitData);

      // Assertion
      const hobbits = await db('hobbits');
      expect(hobbits.length).toBe(1);
      expect(hobbits[0].name).toBe('frodo');
    });

    test('should resolve to the newly created hobbit', async () => {
      // test setup
      const hobbitData = { name: 'frodo' };
      const hobbit = await Hobbits.insert(hobbitData);

      expect(hobbit).toEqual({ id: 1, name: 'frodo' });
    });
  });
});
