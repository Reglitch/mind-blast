const chai = require('chai');

// Use should syntax
chai.should();

// Requirements
const entity = require('../lib/entities/entity.js');
const auraBehaviors = require('../lib/auras/auraBehaviors.js');


// Test Entity
describe('entity', () => {
  // Default parameters
  describe('#defaults', () => {
    let defaultEntity;

    beforeEach(() => {
      defaultEntity = entity();
    });

    it('should have a default name', () => {
      defaultEntity.getName().should.equal('Entity');
    });

    it('name can be changed', () => {
      defaultEntity.setName('memeweaver').should.equal('memeweaver');
    })

    it('health can not be set over maximum', () => {
      defaultEntity.modHealth(100).should.equal(defaultEntity.getMaxHealth());
    })

    it('loses health', () => {
      let currHP = defaultEntity.getHealth();
      defaultEntity.modHealth(-5).should.equal(currHP - 5);
    });

    it('can have max health changed', () => {
      let currMax = defaultEntity.getMaxHealth();
      defaultEntity.modMaxHealth(100).should.equal(currMax + 100);
    });

    it('mana can not be set over maximum', () => {
      defaultEntity.modMana(100).should.equal(defaultEntity.getMaxMana());
    })

    it('loses mana', () => {
      let currHP = defaultEntity.getMana();
      defaultEntity.modMana(-5).should.equal(currHP - 5);
    });

    it('can have mana health changed', () => {
      let currMax = defaultEntity.getMaxMana();
      defaultEntity.modMaxMana(100).should.equal(currMax + 100);
    });

  });


  // Custom entity
  describe('#custom', () => {
    let customEntity;

    // Create a new entity before each test
    beforeEach(() => {
      customEntity = entity('Memeweaver', 10, 10);
    });

    it('should have a custom name', () => {
      customEntity.getName().should.equal('Memeweaver');
    });

    it('should have a custom amount of health', () => {
      customEntity.getMaxHealth().should.equal(10);
    });

    it('should have a custom amount of mana', () => {
      customEntity.getMaxMana().should.equal(10);
    });

  });

});
