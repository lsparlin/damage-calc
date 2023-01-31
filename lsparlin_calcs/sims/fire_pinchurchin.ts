import {SVMove, Field} from '../index'
import RaidBoss from '../lib/raidBoss'
import Krook  from '../lib/attackers/krookodile'
import {simulateRaid} from '../lib/simulate'

const field = new Field({
  // weather: 'Harsh Sunshine',
})

const buffs = {atk: 6}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(6, 'Fire', 'Pincurchin', {debuffs}),
  {
    attacker: Krook(buffs),
    attackerMove: SVMove('Earthquake'),
    field,
    metadata: {buffs, debuffs}
  },
)
