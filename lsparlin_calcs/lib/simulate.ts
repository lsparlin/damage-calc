import {genSV, calculate, Pokemon, Move, Field} from '../index'

interface TeraRaidProps {
  attacker: Pokemon;
  attackerMove: Move;
  field: Field;
  metadata?: any;
}

export function simulateRaid(raidBoss: Pokemon, {
  attacker,
  attackerMove,
  field,
  metadata
}: TeraRaidProps): void {
  showOutcome(
    calculate(genSV, attacker, raidBoss, attackerMove, field),
    metadata
  )
}

function showOutcome(outcome: any, metadata?: any): void {
  const isSteelAttack = outcome.move.type === 'Steel'
  console.log({
    name: `${outcome.defender.teraType} ${outcome.defender.name} - dps: ${outcome.attacker.ability || ''} ${outcome.attacker.name}`,
    attack: outcome.move.name,
    dmgPerc: {
      hp: outcome.defender.stats.hp,
      alone: damagePercLowToHigh(
        outcome.damage as number[],
        outcome.defender.stats.hp
      ),
      addHH: damagePercLowToHigh(
        outcome.damage as number[],
        outcome.defender.stats.hp,
        1.5
      ),
      chrHH: damagePercLowToHigh(
        outcome.damage as number[],
        outcome.defender.stats.hp,
        1.5 * 1.5
      ),
      ...isSteelAttack && {
        catGang: damagePercLowToHigh(
          outcome.damage as number[],
          outcome.defender.stats.hp,
          1.5 * 1.5 * 1.5
        )
      },
    },
    ...metadata,
  })
}

function damagePercLowToHigh(
  damage: number[],
  hp: number,
  multiplier: number = 1
): string {
  const lowest = damage[0]
  const highest = damage[damage.length - 1]
  const perc = (d: number) => (d * multiplier / hp * 100).toFixed(2)
  return `${perc(lowest)} - ${perc(highest)} %`
}

