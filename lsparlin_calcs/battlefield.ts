import {SVMove, Field} from './index'
import RaidBoss from './lib/raidBoss'
import IronHands from './lib/attackers/ironHands'
import {simulateRaid} from './lib/simulate'

const field = new Field({
  // weather: 'Harsh Sunshine',
})

const buffs = {atk: 6, spa: 0}
const debuffs = {def: -6, spd: 0}

simulateRaid(
  RaidBoss(6, 'Normal', 'Amoonguss', {debuffs}),
  {
    attacker: IronHands(buffs),
    attackerMove: SVMove('Close Combat'),
    field,
  }
)
