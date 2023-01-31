import {SVMove, Field} from '../index'
import RaidBoss from '../lib/raidBoss'
import GreatTusk from '../lib/attackers/greatTusk'
import {simulateRaid} from '../lib/simulate'

const field = new Field({
  weather: 'Harsh Sunshine',
})

const buffs = {atk: 4}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(7, 'Poison', 'Greninja', {debuffs}),
  {
    attacker: GreatTusk(buffs),
    attackerMove: SVMove('Headlong Rush'),
    field,
    metadata: {buffs, debuffs}
  },
)
