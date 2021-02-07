//NPM Imports
import React from 'react';

//Prime React Imports
import { InputText } from 'primereact/inputtext';
import { observer } from 'mobx-react';

//Local Imports
import { RobotStoreType } from '../../models/robotStore';

interface EditAttackNameProps{
  robot:RobotStoreType
}
const EditAttackName = observer(({robot}:EditAttackNameProps) => {
  return (
    <InputText value={robot.attack.name} onChange={(e:any) => robot.updateAttackName(e.target.value)} />
  )

});

export default EditAttackName