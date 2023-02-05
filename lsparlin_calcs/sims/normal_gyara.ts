import {SVMove, Fields} from '../index'
import RaidBoss from '../lib/raidBoss'
import IronHands from '../lib/attackers/ironHands'
import {simulateRaid} from '../lib/simulate'

const buffs = {atk: 6}
const debuffs = {def: -2}

simulateRaid(
  RaidBoss(6, 'Normal', 'Gyarados', {debuffs}),
  {
    attacker: IronHands(buffs),
    attackerMove: SVMove('Close Combat'),
    field: Fields.NoEffect,
    metadata: {buffs, debuffs}
  },
)
