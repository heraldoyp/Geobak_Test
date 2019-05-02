import React, { Component } from 'react';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Service from './components/Service';
import Article from './components/Article';
import ContactUs from './components/ContactUs';
import Error from './components/Error';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/service" component={Service}/>
            <Route path="/article" component={Article}/>
            <Route path="/contact" component={ContactUs}/>  
            <Route component={Error} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
