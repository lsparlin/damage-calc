import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import Kingambit from '../lib/attackers/kingambit'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 6}
const debuffs = {def: -6}

simulateRaid(
  RaidBoss(6, 'Ghost', 'Dondozo', {debuffs, ability: 'Water Veil'}),
  {
    attacker: Kingambit(buffs),
    attackerMove: SVMove('Kowtow Cleave'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
