import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import Tinkaton from '../lib/attackers/tinkaton'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 2}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(6, 'Rock', 'Vaporeon', {debuffs}),
  {
    attacker: Tinkaton(buffs),
    attackerMove: SVMove('Gigaton Hammer'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
