const chai = require('chai');

// Use should syntax
chai.should();


// Requirements
const fight = require('../lib/fights/fight');


describe('fight', () => {
  // Timer functions
  describe('#timer', () => {
    let fightInstance = fight();

    it('should instantiate', () => {
      fightInstance.timer.now().should.be.at.least(0);
    });

    it('should be paused by default', () => {
      fightInstance.timer.running.should.be.false;
    });

    it('should start', () => {
      fightInstance.timer.continue();
      fightInstance.timer.running.should.be.true;
    });

    it('should stop', () => {
      fightInstance.timer.pause();
      fightInstance.timer.running.should.be.false;
    });
  });

  // Spawning functions
  describe('spawning', () => {
    let fightInstance;

    // Create a fight and entity before each
    beforeEach(() => {
      fightInstance = fight();
      fightInstance.entity.create();
    });

    it('should have an entity', () => {
      fightInstance.entity.getAll().length.should.equal(1);
    });

    it('should return based on property', () => {
      fightInstance.entity.get('name', 'Entity').length.should.equal(1);
    });

    it('should pass timer scope to entity', () => {
      fightInstance.entity.getAll()[0].timer.now().should.equal(0);
    });

    it('should pass entity manager to entity', () => {
      fightInstance.entity.getAll()[0].entity.getAll().length.should.equal(1);
    });

    it('timer should be available at all depths', () => {
      fightInstance.entity.getAll()[0].entity.getAll()[0].timer.now().should.equal(0);
    });
  });

  // Spawning functions
  describe('casting', () => {
    let fightInstance;

    // Create a fight and entity before each
    beforeEach(() => {
      fightInstance = fight();
      fightInstance.entity.create();
    });

    it('should execute all entitiy priority lists', () => {

    });
  });
});
