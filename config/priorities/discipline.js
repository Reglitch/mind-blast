// Load in priest spells
const spells = require('../spells/priest');

/*
  Priority lists are similar to SimulationCraft APLs.
  They are injected with methods when loaded onto an entity.
*/
module.exports = [
  {
    spell: spells.swp,
    condition: () => 1,
  },
];
