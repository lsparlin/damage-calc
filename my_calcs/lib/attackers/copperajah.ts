import {Pokemon, StatsTable, genSV} from '../../index'

export default function Copperajah(
  buffs: Partial<StatsTable> = {}
): Pokemon {
  return new Pokemon(
    genSV,
    'Copperajah',
    {
      level: 100,
      ability: 'Heavy Metal',
      item: 'Choice Band',
      nature: 'Adamant',
      ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
      evs: {hp: 178, atk: 252, def: 38, spa: 0, spd: 32, spe: 0},
      boosts: buffs,
    }
  )
}
