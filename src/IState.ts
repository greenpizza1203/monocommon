import {ITile} from "./tiles/ITile";
import {ISituation} from "./ISituation";
import {IPlayer} from "./IPlayer";
import {ITrade} from "./ITrade";
import {IAuction} from "./IAuction";

export declare class IState {
    tiles: ITile[];
    currentTurn: number
    players: Record<string, IPlayer>;
    playerIds: string[];
    currentSituation: ISituation;
    currentSpecialDescription: string
    currentTile: number;
    auction: IAuction

    get curTile(): ITile;

    get curPlayer(): IPlayer

    //
    get curPlayerId(): string

    activeTrades: { [string: number]: ITrade }
}
