import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Notes App</h1>
        </header> 
        <AmplifySignOut />
      </div>
     
    )
  }
}

class App extends Component {

  render() {
    return (
      <AmplifyAuthenticator>
       <div className="row">
        <div className="col m-3">
          <Header/>
          Hello world
        </div> 
      </div> 
      </AmplifyAuthenticator>
    );
  }
}

export default App;
