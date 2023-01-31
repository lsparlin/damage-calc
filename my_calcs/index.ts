import {calculate, Pokemon, Move, Generations, Field, StatsTable} from '../calc/src/index'
import {TypeName} from '../calc/src/data/interface'

export {calculate, Pokemon, Move, Generations, Field, StatsTable, TypeName}

export const genSV = Generations.get(9)

export const SVMove = (name: string) => new Move(genSV, name)

export const Fields = {
  NoEffect: new Field({}),
  Sunlight: new Field({weather: 'Harsh Sunshine'}),
}
