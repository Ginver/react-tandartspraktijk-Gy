import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';


function App() {
  return (
    <Router>
        <TopMenu />
        {/*don't wrap <TopMenu> in <Switch> bc it's always visible*/}
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
             <Route path="/gaatjes">
                <CavitiesPage />
            </Route>
            <Route path="/afspraak-maken">
                <AppointmentsPage />
            </Route>
            <Route path="/tanden-bleken">
                <WhiteningPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
