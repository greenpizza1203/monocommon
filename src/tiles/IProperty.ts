import {ITile} from "./ITile";
import {IState} from "../IState";
import {getColorGroup, getStreetRent, IStreet} from "./IStreet";
import {getRailroadRent, IRailroad} from "./IRailroad";
import {getRentRatio, IUtility} from "./IUtility";

export function isMortgagable(prop: IProperty, state: IState) {
    if (this.isMortagaged) return false;
    if (prop.type !== 'Street') return true;
    return getColorGroup(prop as IStreet, state).isUnImproved()
}

// export function getRent(prop: IProperty, state: IState) {
//     if (prop.type === 'Street') return getStreetRent(prop as IStreet, state)
//     if (prop.type === 'Railroad') return getRailroadRent(prop as IRailroad, state)
//     return getRentRatio(prop as IUtility, state)
//
// }

export class IProperty extends ITile {

    ownerId: string
    cost: number
    isMortgaged: boolean;

}
