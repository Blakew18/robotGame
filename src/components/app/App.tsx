//Npm Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom' 
//Prime React Imports
import { ProgressBar } from 'primereact/progressbar';
//Local Imports
import './App.css';
import { RootStoreType, setupRootStore } from '../../models/root-store';
import { RootStoreProvider } from '../RootStoreProvider';
import AppHeaderMenu from '../appHeaderMenu/AppHeaderMenu'
import Home from '../home/Home'
import RobotFactory from '../robotFactory/RobotFactory';
import ViewRobots from '../viewRobots/ViewRobots';


function App() {

  const [rootStore, setRootStore] = useState<RootStoreType>();

  useEffect(() => {
    if (rootStore) return;
    setupRootStore().then((rs) => {
      setRootStore(rs);
    })
    .catch((err) => {
      console.log("ROOTSTORE FAILED TO INITIALIZE")
      console.log(err)
    })
  })

  if (!rootStore) return (
    <div className='text-center'>
       <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
    </div>
  );

  return (
    <div className='App'>
      <RootStoreProvider value={rootStore}>
        <Router>
          <AppHeaderMenu />
          <Switch>
            <Route path="/view-robots" component={ViewRobots}/>
            <Route path="/view-battles" component={Home} />
            <Route path="/robot-factory/" component={RobotFactory} />
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </RootStoreProvider>
    </div>
  );
}

export default App;
