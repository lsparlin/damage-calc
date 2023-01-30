import {Pokemon, TypeName, StatsTable, genSV} from '../index'

type TeraStar = 1 | 2 | 3 | 4 | 5 | 6 | 7

const STAR_LEVELS = {
  1: 12,
  2: 20,
  3: 35,
  4: 45,
  5: 75,
  6: 90,
  7: 100,
}

export default function RaidBoss(
    stars: TeraStar,
    teraType: TypeName,
    name: string,
    options?: {
      nature?: string,
      debuffs?: Partial<StatsTable>,
    }
): Pokemon {
  return new Pokemon(genSV, name, {
    level: STAR_LEVELS[stars],
    teraType: teraType,
    ivs: {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31},
    nature: options?.nature,
    boosts: options?.debuffs,
  })
}
