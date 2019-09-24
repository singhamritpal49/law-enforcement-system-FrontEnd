import React, { Component } from 'react';
import '../LoginCSS.css';
import TicketForm from './TicketForm'
// import Tickets from './Tickets'



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
            .then(user => this.setState({
                name: user.first_name,
                officerid: user.id
            }))


    }

    handleClick = () => {
        localStorage.clear()
        this.props.redirect('login')
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                {
                    this.state.name ?
                        <h1>Welcome Officer {this.state.name} </h1> :
                        <div id="login" className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
                <TicketForm officerid={this.state.officerid} />
                <button onClick={this.handleClick}>Log Out</button>
                {/* <Tickets officerid={this.state.officerid} /> */}
            </div>




        );

    }
}

export default Profile;