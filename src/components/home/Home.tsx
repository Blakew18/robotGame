//NPM Imports
import { observer } from 'mobx-react';
import React from 'react';
import { RootStoreType } from '../../models/root-store';
//Local Imports
import { useStores } from '../RootStoreProvider';

const Home = observer(() => {

  const rootStore: RootStoreType = useStores(); 

  const welcomMessage = () => {
    if (rootStore.robots.length < 1 ){
      return(
        <div>
          <h2>Looks Like You Have Not Made A Robot Yet.</h2>
          <p> Get started by selecting "New Robot" From the menu above.</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2> Welcome Back </h2>
          <p> Check out your robots and View your previous battles in the menu above.</p>
          <p> Or Keep Adding To your Robot Collection With the New Robot Button</p>
          <p> Time for a battle? Click New Battle to battle out your robots Now</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Welcome To The Robot Battle App</h1>
      {welcomMessage()}
    </div>
  )
})

export default Home