import React from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import FourOFour from './components/fourofour/FourOFour';

// import the router component
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
        {/* define our routes */}
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} name="Cramer"/>} />
          {/* <Route exact path="/Welcome/:name" render={({match}) => <Welcome {...match} name={match.name}/>}/> */}
          <Route path="/welcome/:name" component={Welcome} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route component={FourOFour} />
        </Switch>

        {/* <Welcome name="Cramer" />
        <Clock />
        <Contact /> */}

    </div>
  );
}

export default App;
