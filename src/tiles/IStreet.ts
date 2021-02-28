import {IState} from "../IState";
import {IProperty} from "./IProperty";
import {IPlayer} from "../IPlayer";
import {IColorGroup} from "../IColorGroup";

export function getColorGroup(street: IStreet, state: IState) {
    if (!street.colorGroup) IColorGroup.fillColorGroup(street, state)
    return street.colorGroup;
}

export function isMonopoly(street: IStreet, state: IState) {
    let colorGroup = getColorGroup(street, state);
    return (colorGroup).isOwnedBy(street.ownerId)
}


export function getStreetRent(street: IStreet, state): number {
    let rent = street.rent[street.level];
    if (street.level === 0 && isMonopoly(street, state)) rent *= 2
    return rent;
}

export function isDowngradable(street: IStreet, state: IState, player: IPlayer) {
    if (isUnimproved(street)) return;
    if (getColorGroup(street, state).some(tile => tile.level > street.level)) return
    return true;
}

export function isUnimproved(street: IStreet) {
    return street.level === 0;
}


export function isUpgradable(street: IStreet, state: IState, player: IPlayer): boolean {
    let colorGroup = getColorGroup(street, state);
    if (!isMonopoly(street, state)) return false;
    if (colorGroup.hasMortgage()) return
    if (getColorGroup(street, state).some(tile => tile.level < street.level)) return
    if (player.money < street.house_cost) return;
    return true;

}

export class IStreet extends IProperty {
    level: number
    rent: number[]

    color: string;
    colorGroup?: IColorGroup;
    house_cost: number;
}

