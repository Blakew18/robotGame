//NPM Imports
import React from 'react';

//Prime React Imports
import { InputText } from 'primereact/inputtext';
import { observer } from 'mobx-react';

//Local Imports
import { RobotStoreType } from '../../models/robotStore';

interface EditNameProps{
  robot:RobotStoreType
}
const EditName = observer(({robot}:EditNameProps) => {
  return (
    <InputText value={robot.name} onChange={(e:any) => robot.updateName(e.target.value)} />
  )

});

export default EditName