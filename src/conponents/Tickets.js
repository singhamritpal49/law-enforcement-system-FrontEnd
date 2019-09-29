import React, { Component } from 'react';


class Tickets extends Component {
state = {
    showTicketDetail: false,
    ticketObj: {}
}


    handleClick = (event) => {
        console.log(event.target)
    }

    render() {
        // console.log(this.props);
        const tickets = this.props.tickets.map(ticket => {
            // console.log(ticket)
            // return <li
            //     onClick={this.handleClick}>
            //     Violation Number : {ticket.case_number}
            //     Date: {ticket.date}  
            //     {ticket.id}
            //     </li>
        })

        // console.log(this.state)
        return (
            <div>
                <h1>Written Tickets</h1>
                <ol>
                    {tickets}
                </ol>
            </div>
        );
    }
}

export default Tickets;