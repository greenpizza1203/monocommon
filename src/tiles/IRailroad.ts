import {IProperty} from "./IProperty";
import {IState} from "../IState";

let railroads: IRailroad[] | undefined

function getOwnedRailroadsCount(curRailroad: IRailroad, state: IState) {
    if (!railroads) railroads = state.tiles.filter(tile => tile.type === 'Railroad') as IRailroad[]
    return railroads.filter(railroad => railroad.ownerId === curRailroad.ownerId).length
}

export function getRailroadRent(railroad: IRailroad, state: IState): number {

    return railroad.rent[getOwnedRailroadsCount(railroad, state)-1]
}

export class IRailroad extends IProperty {
    // level: number
    rent: number[]

}

