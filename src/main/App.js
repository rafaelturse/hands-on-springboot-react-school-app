import React from 'react';

import AuthenticationProvider from './AuthenticationProvider'

import Routes from './routes';

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import 'toastr/build/toastr.min.js'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import 'bootswatch/dist/flatly/bootstrap.css'
import '../css/general/custom.min.css'
import 'toastr/build/toastr.css'

class App extends React.Component {
  render() {
    return (
      <AuthenticationProvider>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
        <Footer />
      </AuthenticationProvider>
    )
  }
}

export default App