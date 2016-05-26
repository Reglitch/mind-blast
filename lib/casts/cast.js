const auraBehaviors = require('../auras/auraBehaviors');
const castBehaviors = require('./castBehaviors');

/*
  Cast objects contain the details for each spell event.
*/
const cast = (source, target, spell) => {
  this.state = {
    source,
    target,
  };

  // Use source caster timer
  const timer = source.timer;

  // Generate spell details
  const isCrit = Math.round(Math.random()) >= 0.5 ? 0 : 1;
  const typemod = spell.offensive ? -1 : 1;
  this.state.spellDetails = spell;
  this.state.name = spell.name;
  this.state.amount = source.spellpower() * spell.coefficient * (isCrit ? 2 : 1) * source.vers();
  this.state.type = spell.offensive ? 'damage' : 'heal';
  this.state.cast = timer.setTimeout(() => {
    target.modHealth(typemod * this.state.amount);
    console.log(`Damaged ${target.getName()} for ${this.state.amount}.
    Current HP is ${target.getHealth()}`);
  }, spell.castTime);

  // Expose the methods for entity
  return Object.assign(
    {},
    auraBehaviors.buffer,
    castBehaviors.healthChanger
  );
};

module.exports = cast;
