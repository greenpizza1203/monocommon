import {room} from "./actions_wrapper";

//id= curPlayer
//situation = waiting_for_dice_roll
room.send("roll_dice")

//id= curPlayer
//situation = in_jail
room.send('jail', 'roll_dice')
room.send('jail', 'pay_money')
room.send('jail', 'use_card')

//id = curPlayer
//situation = buy_or_auction
room.send('property_buy')
room.send('property_auction')

//id = tile.owner
//money > cost
//0 < property.level < 5
room.send('property', {tile: 39, choice: 'upgrade'})
room.send('property', {tile: 39, choice: 'downgrade'})
room.send('property', {tile: 39, choice: 'mortgage'})
room.send('property', {tile: 39, choice: 'unmortage'})

//situation = auction
room.send('auction', 'bid')
room.send('auction', 'fold')

