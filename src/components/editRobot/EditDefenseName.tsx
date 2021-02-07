//NPM Imports
import React from 'react';

//Prime React Imports
import { InputText } from 'primereact/inputtext';
import { observer } from 'mobx-react';

//Local Imports
import { RobotStoreType } from '../../models/robotStore';

interface EditDefenseNameProps{
  robot:RobotStoreType
}
const EditDefenseName = observer(({robot}:EditDefenseNameProps) => {
  return (
    <InputText value={robot.defense.name} onChange={(e:any) => robot.updateDefenseName(e.target.value)} />
  )

});

export default EditDefenseName