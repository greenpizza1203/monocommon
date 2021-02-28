import {IStreet, isUnimproved} from "./tiles/IStreet";
import {IState} from "./IState";

export class IColorGroup {
    group: IStreet[]

    constructor(group: IStreet[]) {
        this.group = group;
    }

    static fillColorGroup(street: IStreet, state: IState) {
        const group = state.tiles.filter((tile: IStreet) => tile.color === street.color) as IStreet[];
        const colorGroup = new IColorGroup(group)
        colorGroup.forEach(street => street.colorGroup = colorGroup)

    }


    isUnImproved() {
        return this.group.every(street => isUnimproved(street))
    }

    hasMortgage() {
        return this.group.some(tile => tile.isMortgaged)
    }

    isOwnedBy(ownerId: string) {
        return this.group.every(tile => tile.ownerId === ownerId)

    }

    forEach(func: (IStreet) => void) {
        this.group.forEach(func)
    }

    some(func: (tile) => boolean) {
        return this.group.some(func)
    }
}

