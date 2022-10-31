import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
/* PLOP_INJECT_IMPORT_TAB */
import './App.css';

class App extends Component {
  render() {
    return (
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Home Page
      </Tab>
      {/* PLOP_INJECT_TAB */}
      
    </Tabs>
    );
  }
}

export default App;
