import React, { Component } from 'react';


class Tickets extends Component {


    
    render() {
        // console.log(this.props);
        const tickets = this.props.tickets.map(ticket => 
            console.log(ticket)
        )

        // console.log(this.state)
        return (
            <div>
               <h1>Written Tickets</h1> 
                <ol>
                {/* {tickets} */}
                </ol>
            </div>
        );
    }
}

export default Tickets;