const auraBehaviors = require('../auras/auraBehaviors');
const entityBehaviors = require('./entityBehaviors');
const generalBehaviors = require('../general/general');

/*
  Entities are a general unit type.
  Think of them as dummies for actions.
*/
const entity = (name = 'Entity',
                health = 1200000,
                mana = 1200000,
                priorities = [],
                faction = 0
                ) => {
  this.state = {
    name,
    health,
    maxHealth: health,
    mana,
    maxMana: mana,
    priorities,
    auras: {},
    faction,
  };

  // Expose the methods for entity
  return Object.assign(
    {},
    auraBehaviors.buffee(this.state),
    entityBehaviors.mortal(this.state),
    entityBehaviors.caster(this.state),
    entityBehaviors.alleiganced(this.state),
    entityBehaviors.geared(this.state),
    generalBehaviors.named(this.state),
    generalBehaviors.filterable(this.state)
  );
};

module.exports = entity;
