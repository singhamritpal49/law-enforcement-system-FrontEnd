import React, { Component } from 'react';
// import SelectSearch from 'react-select-search'

class Tickets extends Component {
state = {
    tickets: []
}
    givenTickets = () => {
    fetch(`http://localhost:3000/officers/${this.props.officerid}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

    

    render() {
// console.log(this.props)
        // console.log(this.state)
        return (
            <div>
                
            </div>
        );
    }
}

export default Tickets;