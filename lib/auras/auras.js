const auraManagement = require('./auraBehaviors');

/*
  Auras are essentially buffs or debuffs.
  Think of them as dummies for actions.
  The only method for applying an aura is through the 'buffer' method.
*/
const create =
(
  name = 'Shadow Word: Potato',
  duration = 20,
  coefficient = 1,
  ticks = 9,
  tickEffects = [],
  fadeEffects = [],
  source = undefined,
  unit = undefined
) => {
  this.state = {
    name,
    coefficient,
    tickEffects,
    fadeEffects,
    source,
    unit,
  };

  // Expose the methods for entity
  return Object.assign(
    {},
    auraManagement.buffer
  );
};

module.exports = create;
