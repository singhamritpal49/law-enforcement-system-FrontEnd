import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './conponents/Login'
import Profile from './conponents/Profile'
import TicketForm from './conponents/TicketForm'
import Error from './conponents/Error'
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {
  state = {
    page: 'login'
  }

  componentDidMount() {
    if (localStorage.token) {
      // this.redirect('profile')
      this.props.history.push('/profile')

    }
  }

  redirect = (page) => {
    this.setState({ page: page })
  }



  render() {
    // console.log(this.props);
    return (

      <div>
        <Switch>
          <Route path={'/profile'} component={Profile} />
          {/* <Route path={'/ticketform'} component={TicketForm} /> */}
          <Route exact path={'/'} component={Login} />
          <Route component={Error} />

        </Switch>
      </div>

    )
    //  <Login />
    // switch (this.state.page) {
    //   case 'login':
    //     return <Login redirect={this.redirect}/>
    //   case 'profile':
    //     return <Profile redirect={this.redirect} />
    //   case 'ticketform':
    //     return <TicketForm />
    //   default:
    //     return <Login />
    // }




  }
}

export default withRouter(App);