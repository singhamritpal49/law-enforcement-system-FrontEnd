import React, { Component } from 'react';
import '../LoginCSS.css';
import TicketForm from './TicketForm'
// import Tickets from './Tickets'
import TicketCollection from './TicketCollection'
import AddCivilian from './AddCivilian';


class Profile extends Component {
    state = {
        name: '',
        officerid: '',
        tickets: []

    }

    componentDidMount() {
        fetch("http://localhost:3000/profile", {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
            .then(data => data.json())
            .then(user => {
                // console.log(user)
                this.setState({
                    name: user.first_name,
                    officerid: user.id,
                    tickets: user.tickets
                })
            })
    }

    handleClick = () => {
        localStorage.clear()
        // this.props.redirect('login')
        this.props.history.push('/')

    }





    render() {
        // {this.getTicketData() }
        // console.log(this.state);
        return (
            <div>
                <div className="topnav">
                <marquee id="tagcolor" >
                Users of this system are advised they are accessing a restricted information system that is governed by applicable agency policies, local laws, state laws, federal laws, and other regulations. Usage may be monitored, recorded, and subject to audit.
Unauthorized use of this system is prohibted. Unauthorized users may be subject to criminal and/or penalties. Continuing to use of this system indicates the user's consent to the monitoring and recording of all actions within the system.
                </marquee>
                    <button className="active" onClick={this.handleClick}>Log Out</button>
                </div>
                {
                    this.state.name ?
                        <h1 style={{background: 'white'}}>Welcome Officer {this.state.name} </h1> :
                        <div id="login" className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
                <main>
                 <TicketForm officerid={this.state.officerid} />
                 <TicketCollection tickets={this.state.tickets} />
                </main>
                
            </div>




        );

    }
}

export default Profile;