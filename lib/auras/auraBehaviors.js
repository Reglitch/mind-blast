/*
  Parent will usually be a spell or another aura.
  Directs auras to be applied to buffee units.
*/
const buffer = (state) => ({
  applyAura: function applyAura(auraObj, source, unit) {
    unit.addAura(state, auraObj);
  },
  cancelAura: function cancelAura(auraName, source, unit) {
    unit.fadeAura(auraName);
  },
});


/*
  Handles the reception and removal of auras
  Only ever applied to units
*/
const buffee = (state) => ({
  getAura: auraName => state.auras[auraName],
  addAura: aura => {
    if (state.auras[aura.name]) {
      // refreshAura();
    } else {
      state.auras[aura.name] = [].push(aura);
    }
  },
  fadeAura: function fadeAura(auraName) {
    const aura = this.getAura(auraName);
    if (aura) {
      aura.fade();
    }
  },
});


// Expose methods
module.exports = {
  buffer,
  buffee,
};
