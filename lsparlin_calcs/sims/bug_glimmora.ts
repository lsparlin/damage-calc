import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import CheinPao from '../lib/attackers/cheinPao'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 6}
const debuffs = {def: -6}

simulateRaid(
  RaidBoss(6, 'Bug', 'Glimmora', {debuffs}),
  {
    attacker: CheinPao(buffs),
    attackerMove: SVMove('Icicle Crash'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
