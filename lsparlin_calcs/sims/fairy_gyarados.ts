import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import Tinkaton from '../lib/attackers/tinkaton'
import Copperajah from '../lib/attackers/copperajah'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 2}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(6, 'Fairy', 'Gyarados', {debuffs}),
  {
    attacker: Copperajah(buffs),
    attackerMove: SVMove('Heavy Slam'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
