import React, { Component } from 'react';


class Tickets extends Component {
state = {
    tickets: [],
    
}


componentDidMount() {
    
        fetch(`http://localhost:3000/officers/${this.props.officerid}`)
        .then(res => res.json())
        .then(data => console.log(data))
            
    
}

    

    render() {

        // console.log(this.state)
        return (
            <div>
               <h1>Written Tickets</h1> 
            </div>
        );
    }
}

export default Tickets;