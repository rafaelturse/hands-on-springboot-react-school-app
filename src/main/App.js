import React from 'react';

import AuthenticationProvider from './AuthenticationProvider'

import Routes from './routes';

import Navbar from '../components/navbar'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../css/general/custom.min.css'
import 'toastr/build/toastr.css'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

class App extends React.Component {
  render() {
    return (
      <AuthenticationProvider>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </AuthenticationProvider>
    )
  }
}

export default App