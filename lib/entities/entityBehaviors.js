const cast = require('../casts/cast.js');

/*
  Casters can cast and cancel their own spells.
  Entities by default are casters.
*/
const caster = (state) => {
  // Contain casts in spawn manager state
  this.state = {
    casts: [],
    gcdActive: false,
    casting: false,
    currentCast: undefined,
  };

  // State Reference
  this.casterState = this.state;

  return {
    isCasting: () => this.state.casting,
    isGCDActive: () => this.state.gcd,
    currentCast: () => this.state.currentcast,
    setPriorityList: (pl) => { state.priorities = pl; },
    getPriorityList: () => state.priorities,
    evaluatePriorityList: function evalPriorities() {
      for (let i = 0; i < state.priorities.length; i++) {
        if (state.priorities[i].condition()) {
          cast(this, this, state.priorities[i].spell);
        }
      }
    },
    getMana: () => state.mana,
    getMaxMana: () => state.maxMana,
    modMana: function modMana(amount) {
      // Mana can never go over max health or < 0
      const maxMana = this.getMaxMana();
      const currMana = this.getMana();
      const futureMana = currMana + amount;

      if (futureMana > 0 && futureMana <= maxMana) {
        state.Mana = futureMana;
        return futureMana;
      } else if (futureMana < 0) {
        console.log("OOM");
      } else {
        state.Mana = maxMana;
        return maxMana;
      }
    },
    modMaxMana: (amount) => { state.maxMana += amount; return state.maxMana; },
    cancelCast: function cancelCast(spell) {

    },
  };
};


/*
  Mortals can take damage and recover from damage.
  Entities by default are mortal.
*/
const mortal = (state) => ({
  getHealth: () => state.health,
  modHealth: function setHealth(amount) {
    // Health can never go over max health or < 0
    const maxHealth = this.getMaxHealth();
    const currHealth = this.getHealth();
    const futureHealth = currHealth + amount;

    if (futureHealth > 0 && futureHealth <= maxHealth) {
      state.health = futureHealth;
      return futureHealth;
    } else if (futureHealth < 0) {
      console.log("Dead");
    } else {
      state.health = maxHealth;
      return maxHealth;
    }
  },
  getMaxHealth: () => state.maxHealth,
  modMaxHealth: (amount) => { state.maxHealth += amount; return state.maxHealth; },
});


/*
  Alleiganced entities have a faction ID
*/
const alleiganced = (state) => ({
  getFaction: () => state.faction,
  isSameFaction: (unit1, unit2) => unit1.getFaction() === unit2.getFaction(),
  setFaction: (id) => { state.faction = id; },
});


/*
  Geared entities have stats.
  These are passed through to spells.
*/
const geared = () => {
  this.state = {
    spellpower: 20000,
    haste: 0.3,
    crit: 0.2,
    mastery: 0.3,
    vers: 0.05,
  };

  // Convert stat to absolute over raw healing
  const decimalToAbsolute = (stat) => stat + 1;

  // Return methods to manipulate stats
  return {
    spellpower: () => this.state.spellpower,
    haste: () => decimalToAbsolute(this.state.haste),
    crit: () => decimalToAbsolute(this.state.crit),
    mastery: () => decimalToAbsolute(this.state.mastery),
    vers: () => decimalToAbsolute(this.state.vers),
    setStat: (name, val) => { this.state[name] = val; },
    modStat: (name, val) => { this.state[name] += val; },
  };
};

// Export mortal methods
module.exports = {
  mortal,
  caster,
  alleiganced,
  geared,
};
