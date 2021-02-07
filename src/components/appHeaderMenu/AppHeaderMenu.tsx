//Npm Imports
import React from 'react';
import { useHistory } from "react-router-dom";

//Prime React Imports
import { TabMenu } from 'primereact/tabmenu';
//Local Imports

const AppHeaderMenu = () => {

  const history = useHistory();

  const navigate = (page:string) => {
    history.push(page)
  }
  const items:{label:string, icon: string, command:any}[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home', command: () => navigate("/") },
    {label: 'View Robots', icon: 'pi pi-fw pi-android', command: () => navigate("/view-robots") },
    {label: 'View Battles', icon: 'pi pi-fw pi-shield', command: () => navigate("/view-battles") },
    {label: 'New Robot', icon: 'pi pi-fw pi-plus', command: () => navigate("/robot-factory") },
    {label: 'New Battle', icon: 'pi pi-fw pi-plus-circle', command: () => navigate("/new-battle") }
  ];



  return (
    <TabMenu model={items} />
  )
};

export default AppHeaderMenu
