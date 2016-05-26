const fightBehaviors = require('./fightBehaviors');

/*
  Fights contain an entire fight.
  They have the methods to spawn entities, manage their time, and so on.
  They pass relevant methods to entities.
*/

const fight = (timer = fightBehaviors.timer()) => {
  // Fight state
  this.state = {
    timer,
  };

  // Expose the methods for entity
  return Object.assign(
    {},
    timer,
    fightBehaviors.spawner(this.state)
  );
};

module.exports = fight;
