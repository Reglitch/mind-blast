const hypertimer = require('hypertimer');

// Requirements
const entity = require('../entities/entity.js');


/*
  Timers are simply a contained simulation engine.
  Timers are paused by default.
  We also set up a contained event loop here.
*/
const timer = () => {
  const timerInstance = hypertimer({ paced: false, time: 0 });
  timerInstance.pause();

  // Event loop
  timerInstance.setInterval(() => {
    this.entity.getAll()
      .forEach(ent => { ent.evaluatePriorityList(); });
  }, 10);

  return { timer: timerInstance };
};


/*
  Spawners create entities.
  Passes the state of the parent into the entity scope.
*/
const spawner = (state) => {
  // Contain entities in spawn manager state
  this.state = {
    entities: [],
  };

  // Reference for inside create method
  const spawnState = this.state;

  // Contain methods
  this.entity = {
    create: function createEnt(name, health, mana, pl, faction) {
      const newEntity = entity(name, health, mana, pl, faction);
      const entityProto = Object.create(Object.assign({}, state.timer, { entity: this }));
      spawnState.entities.push(Object.assign(entityProto, newEntity));
    },
    getAll: () => this.state.entities,
    get: (prop, val) => this.state.entities.filter(ent => ent.getByProperty(prop, val)),
  };

  // Return an object with entity methods
  return {
    entity: this.entity,
  };
};

// Export fight method
module.exports = {
  timer,
  spawner,
};
