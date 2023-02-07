import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import AquaTauros from '../lib/attackers/aquaTauros'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 6}
const debuffs = {def: -4}

simulateRaid(
  RaidBoss(6, 'Ground', 'Amoonguss', {debuffs}),
  {
    attacker: AquaTauros(buffs),
    attackerMove: SVMove('Wave Crash'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
