/*
  Get or set a name.
*/
const named = (state) => ({
  getName: () => state.name,
  setName: (name) => { state.name = name; return state.name; },
});

/*
  Get any property in state
*/
const filterable = (state) => ({
  getByProperty: (property, val) => state[property] === val,
});

// Expose methods
module.exports = {
  named,
  filterable,
};
