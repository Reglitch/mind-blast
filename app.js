// Requirements
const fight = require('./lib/fights/fight');
const disc = require('./config/priorities/discipline');

const fightInstance = fight();
fightInstance.entity.create('Reglitch', 1200000, 1200000, disc, 0);

fightInstance.timer.continue();
