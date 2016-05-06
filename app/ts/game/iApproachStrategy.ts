export interface IApproachStrategy {
    approach(player) : boolean
    lastRolls() : Array<number>
}