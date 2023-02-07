import {Pokemon, StatsTable, genSV} from '../../index'

export default function Crabominable(
  buffs: Partial<StatsTable> = {},
  additionalOptions?: object
): Pokemon {
  return new Pokemon(
    genSV,
    'Crabominable',
    {
      level: 100,
      item: 'Choice Band',
      nature: 'Adamant',
      ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
      evs: {hp: 252, atk: 252, def: 6, spa: 0, spd: 0, spe: 0},
      boosts: buffs,
      ...additionalOptions,
    }
  )
}
