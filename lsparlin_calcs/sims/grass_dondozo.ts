import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import Crab from '../lib/attackers/crabominable'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 6}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(6, 'Grass', 'Dondozo', {debuffs, ability: 'Water Veil'}),
  {
    attacker: Crab(buffs, { ability: 'Pure Power' }),
    attackerMove: SVMove('Ice Hammer'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
