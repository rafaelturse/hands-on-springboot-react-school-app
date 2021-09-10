import React from 'react';

import Routes from './routes';
import Navbar from '../components/navbar'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../css/general/custom.min.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;