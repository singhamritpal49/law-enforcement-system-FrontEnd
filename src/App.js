import React, { Component } from 'react';

import Login from './conponents/Login'
import Profile from './conponents/Profile'
import TicketForm from './conponents/TicketForm'

class App extends Component {
  state = {
    page: 'login'
  }

  componentDidMount() {
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  redirect = (page) => {
    this.setState({ page: page})
  }



  render() {

    switch (this.state.page) {
      case 'login':
        return <Login redirect={this.redirect}/>
      case 'profile':
        return <Profile redirect={this.redirect} />
      case 'ticketform':
        return <TicketForm />
      default:
        return <Login />
    }




  }
}

export default App;