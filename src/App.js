import './App.css';
import { Provider } from 'react-redux';
import React from 'react';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';
import Itemcontainer from './components/Itemcontainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer/> */}
      <Itemcontainer cake/>
      <Itemcontainer/>
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      </div>
    </Provider>
   
  );
}

export default App;
