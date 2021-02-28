import {IProperty} from "./IProperty";
import {IState} from "../IState";

let utilities: IUtility[] | undefined

function getOwnedUtilitiesCount(curRailroad: IUtility, state: IState) {
    if (!utilities) utilities = state.tiles.filter(tile => tile.type === 'Utility') as IUtility[]
    return utilities.filter(utility => utility.ownerId === curRailroad.ownerId).length
}

export function getRentRatio(utility: IUtility, state: IState): number {
    // console.log(utility);
    return utility.rent_ratio[getOwnedUtilitiesCount(utility, state) - 1]
}

export class IUtility extends IProperty {
    rent_ratio: number[]
}
