//Npm Imports
import { Instance, onSnapshot, types } from 'mobx-state-tree';
import _ from 'lodash';
//Local Imports
import { sendRootStoreToAPI, getRootStoreData } from '../services/services'
import robotStoreModel, { RobotStoreType } from './robotStore';
import battleStoreModel, { BattleStoreType} from './battleStore'

export const rootStoreModel = types
  .model('rootStore', {
    robots: types.array(robotStoreModel),
    battles: types.array(battleStoreModel)
  })
  .views((self) => {
    return {
      viewRobotByName(name:string) {
        return name
      }
    }
  })
  .actions((self) => {
    return {
      createNewRobot(robot){
        self.robots.push(robot)
        //Send To Service To Update DB
      },
      deleteRobot(robot){
        self.robots.remove(robot)
      }
      
    }
  })

  export type RootStoreType = Instance<typeof rootStoreModel>;
  export const setupRootStore = async () => {
    const data:RootStoreType|string = await getRootStoreData()
    const rs:RootStoreType = data === "" ? rootStoreModel.create() : rootStoreModel.create(data)
    console.log("RootStore Set Up")
    onSnapshot(rs, (newSnapshot:RootStoreType) => {
      sendRootStoreToAPI(newSnapshot)
    })
    return rs
  }