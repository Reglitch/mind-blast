const chai = require('chai');

// Use should syntax
chai.should();

// Requirements
const entity = require('../lib/entities/entity.js');
const auraBehaviors = require('../lib/auras/auraBehaviors.js');
const aura = require('../lib/auras/auras.js');

// Test aura
describe('aura', () => {
  const auraConfig = {
    name: 'Shadow Word: Pain',
    duration: 18,
    coefficient: 0.35,
    ticks: 9,
    tickEffects: [],
    fadeEffects: [],
  }

  describe('#creation', () => {
    let testAura;
    let testEntity;

    // Create a dummy entity and aura before each
    beforeEach(() => {
      testEntity = entity();
      //testAura = aura.create(auraConfig,);
    });
  });
});
