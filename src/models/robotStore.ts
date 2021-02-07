import { types, Instance } from 'mobx-state-tree';

const RobotStoreModel = types 
  .model('RobotStore', {
    name: types.string,
    colour: types.string,
    attack: types.model({name: types.string, strength: types.integer}),
    defense: types.model({name: types.string, strength: types.integer})
  })
  .views((self) => {
    return {

    }
  })
  .actions((self) => {
    return {
      updateName(name:string) {
        self.name = name
      },
      updateColour(colour:string) {
        self.colour = colour
      },
      updateAttackName(name:string) {
        self.attack.name = name
      },
      updateDefenseName(name:string) {
        self.defense.name = name
      },
    }
  });

export type RobotStoreType = Instance<typeof RobotStoreModel>;
export default RobotStoreModel;
