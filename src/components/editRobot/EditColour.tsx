//NPM Imports
import React from 'react';

//Prime React Imports
import {ColorPicker} from 'primereact/colorpicker';
import { observer } from 'mobx-react';

//Local Imports
import { RobotStoreType } from '../../models/robotStore';

interface EditColourProps{
  robot:RobotStoreType
}
const EditColour = observer(({robot}:EditColourProps) => {
  return (
    <ColorPicker value={robot.colour} onChange={(e) => robot.updateColour(e.value)} />
  )

});

export default EditColour