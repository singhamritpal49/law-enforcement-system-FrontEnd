import React, { Component } from 'react';
import Ticket from './Ticket'

class TicketCollection extends Component {



    handleClick = (event) => {
        console.log(event.target)
    }

    render() {
        // console.log(this.props);
        const tickets = this.props.tickets.map(ticket => {
        return <Ticket ticket={ticket} key={ticket.id}/>
        })

        // console.log(this.state)
        return (
            <div>
                <h1> Wtitten Tickets </h1>
                <ol>
                    {tickets}
                </ol>
            </div>
        );
    }
}

export default TicketCollection;