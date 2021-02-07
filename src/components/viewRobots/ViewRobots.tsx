//NPM Imports
import { observer } from 'mobx-react';
import React from 'react';

//Prime React Imports
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Knob } from 'primereact/knob';

//Local Imports
import { RootStoreType } from '../../models/root-store';
import { useStores } from '../RootStoreProvider';
import { RobotStoreType } from '../../models/robotStore';
import EditName from '../editRobot/EditName';
import EditColour from '../editRobot/EditColour';
import EditAttackName from '../editRobot/EditAttackName';
import EditDefenseName from '../editRobot/EditDefenseName';

const ViewRobots = observer(() => {

  const rootStore: RootStoreType = useStores();

  const displayName = (rowData:RobotStoreType) => {
    return <EditName robot={rowData}/>
  }

  const displayColour = (rowData:RobotStoreType) => {
    return <EditColour robot={rowData}/>
  }

  const displayAttackMove = (rowData:RobotStoreType) => {
    return <EditAttackName robot={rowData}/>
  }
  const displayAttackStrength = (rowData:RobotStoreType) => {
    return  <Knob value={rowData.attack.strength} size={50} readOnly />
  }
  const displayDefenseMove = (rowData:RobotStoreType) => {
    return <EditDefenseName  robot={rowData}/>
  }
  const displayDefenseStrength = (rowData:RobotStoreType) => {
    return  <Knob value={rowData.defense.strength} size={50} readOnly />
  }
  const deleteIcon = (rowData:RobotStoreType) => {
    const handleClick = () =>{
      rootStore.deleteRobot(rowData)
    }
    return <i className="pi pi-trash" style={{'fontSize': '2em'}} onClick={handleClick}></i>
  }

  return (
      <div>
        <h1>Check Out Your List Of Robots</h1>
        <DataTable value={rootStore.robots}>
            <Column field="Delete" header="Delete" body={deleteIcon} headerStyle={{width: '6em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
            <Column field="Name" header="Name" body={displayName}/>
            <Column field="Colour" header="Colour" body={displayColour} headerStyle={{width: '6em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}}/>
            <Column field="moveOne" header="Attack Move" body={displayAttackMove}/>
            <Column field="moveOnePower" header="Attack Power" body={displayAttackStrength}/>
            <Column field="defenseOne" header="Defense Move" body={displayDefenseMove}/>
            <Column field="defensePower" header="Defense Power" body={displayDefenseStrength}/>
        </DataTable>
      </div>
  )
});

export default ViewRobots