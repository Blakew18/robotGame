import { types, Instance } from 'mobx-state-tree';

const BattleStoreModel = types 
  .model('BattleStore', {
    id: types.string,
    robotOneName: types.string,
    robotTwoName: types.string,
    robotOneMoves: types.array(types.string),
    robotTwoMoves: types.array(types.string),
    winner: types.string
  })

export type BattleStoreType = Instance<typeof BattleStoreModel>;
export default BattleStoreModel;



