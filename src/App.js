import logo from './logo.svg';
import './App.css';
import DrawerLayout from "./Components/DrawerLayout";
import {Switch,Route} from "react-router-dom";
import Medicine from './Container/Medicine/Medicine';
import Patient from './Container/Patient/Patient';
import configureStore from './Redux/Store';
import Counter from './Container/Counter';
import { Provider } from 'react-redux';

function App() {
  const store=configureStore()
  return (
    <div className="App">
      <Provider store={store}>
        <DrawerLayout>
            <Switch>
              <Route path='/Medicine' exact component={Medicine} />
              <Route path='/patient' exact component={Patient} />
              <Route path='/Counter' exact component={Counter} />
            </Switch>
        </DrawerLayout>
      </Provider>
    </div>
  );
}

export default App;
