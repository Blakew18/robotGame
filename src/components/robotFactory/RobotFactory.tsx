//NPM Imports 
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

//Prime React Imports
import { InputText } from 'primereact/inputtext';
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast';
import { Knob } from 'primereact/knob';

//Local Imports
import { RootStoreType } from '../../models/root-store';
import { useStores } from '../RootStoreProvider';

const RobotFactory = () => {

  // Root Store Requirements
  const rootStore: RootStoreType = useStores();

  //Reference For Errors
  const toast = useRef(null);

  //Form State
  const [name, setName] = useState<string>("") 
  const [colour, setColour] = useState<string>("800080")
  const [moveOne, setMoveOne] = useState<string>("") 
  const [moveOnePower, setMoveOnePower] = useState<number>(0)
  const [defenseOne, setDefenseOne] = useState<string>("") 
  const [defenseOnePower, setDefenseOnePower] = useState<number>(0)
  const [strengthCount, setStrengthCount] = useState<number>(0)
  const [defenseCount, setDefenseCount] = useState<number>(0)


  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success Message', detail:`${name}, has been added to your libary of Robots`, life: 3000});
  }
  const showError = (errMessage:string) => {
    toast.current.show({severity:'error', summary: 'Error Message', detail: errMessage, life: 3000});
  } 
  

  const handleSubmission = () => {
    if (name === "") {showError("Please Enter A Name For Your Robot"); return}
    if (moveOne === "") {showError("Please Enter A Name For Your Robots Attack Move"); return}
    if (moveOnePower === 0) {showError("Please Generate Attack Strength For Your Robot"); return}
    if (defenseOne === "") {showError("Please Enter A Name For Your Robots Defense Move"); return}
    if (defenseOnePower === 0) {showError("Please Generate Defense Strength For Your Robot"); return}
    rootStore.createNewRobot({
        name: name,
        colour: colour,
        attack: {name: moveOne, strength: moveOnePower},
        defense: {name: defenseOne, strength: defenseOnePower}
    })
      showSuccess() 
      setName("")
      setColour("800080")
      setMoveOne("")
      setMoveOnePower(0)
      setDefenseOne("")
      setDefenseOnePower(0)
      setStrengthCount(0)
      setDefenseCount(0)

  }

  const attackStrengthGenerator = () => {
    if (strengthCount >= 3){
      showError("You have already made 3 attempts to power your robots attack")
    } else {
      setStrengthCount(strengthCount + 1)
      setMoveOnePower(Math.floor(Math.random() * 101))
    }
  }

  const deffenceStrengthGenerator = () => {
    if (defenseCount >= 3){
      showError("You have already made 3 attempts to power your robots defense")
    } else {
      setDefenseCount(defenseCount + 1)
      setDefenseOnePower(Math.floor(Math.random() * 101))
    }
    }

  return (
    <div>
      <h1>Let's Build A Robot</h1>
      
      <h4>Lets Give Your Robot A Name.</h4>
      <InputText value={name} onChange={(e:any) => setName(e.target.value)} />
      
      <h4>What Colour Should {name||"Your Robot"} be</h4>
      <ColorPicker value={colour} onChange={(e:any) => setColour(e.value)} />
     
      <h4>Lets Name Your Attack</h4>
      <InputText value={moveOne} onChange={(e:any) => setMoveOne(e.target.value)} />
      
      <h4>Click Bellow To Generate Your Attacks Strength. Be Careful You Can Only Try 3 Times</h4>
      <Button label="Generate Attack Stength" onClick={attackStrengthGenerator}/>
      <Knob value={moveOnePower} size={150} readOnly />
      
      <h4>Lets Name Your Defense</h4>
      <InputText value={defenseOne} onChange={(e:any) => setDefenseOne(e.target.value)} />
      
      <h4>Click Bellow To Generate Your Defense Strength. Be Careful You Can Only Try 3 Times</h4>
      <Button label="Generate Defense Stength" onClick={deffenceStrengthGenerator}/>
      <Knob value={defenseOnePower} size={150} readOnly />

      <h4>Time To Build Your Robot</h4>
      <Button label="Build!" onClick={handleSubmission}/>
      <Toast ref={toast} />
    </div>
  )
};

export default RobotFactory