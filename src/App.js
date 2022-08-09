import logo from './logo.svg';
import './App.css';
import DrawerLayout from "./Components/DrawerLayout";
import {Switch,Route} from "react-router-dom";
import Medicine from './Container/Medicine/Medicine';
import Patient from './Container/Patient/Patient';
import configureStore from './Redux/Store';
import Counter from './Container/Counter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const {store,persistor}=configureStore()
  return (
    <div className="App">
      <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <DrawerLayout>
            <Switch>
              <Route path='/Medicine' exact component={Medicine} />
              <Route path='/patient' exact component={Patient} />
              <Route path='/Counter' exact component={Counter} />
            </Switch>
        </DrawerLayout>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
