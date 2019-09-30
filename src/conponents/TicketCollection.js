import React, { Component } from 'react';
import Ticket from './Ticket'
import DisplayTicket from './DisplayTicket';

class TicketCollection extends Component {
    state= {
        showinfo: false,
        info: {}
    }
    showInfo = (event) => {
        this.setState({
            showinfo: true
        })
    }

    handleInfo = (info) => {
        this.setState({
            info: info
        })
    }
   

    render() {
        // console.log(this.props);
        const tickets = this.props.tickets.map(ticket => {
        return <Ticket ticket={ticket} key={ticket.id} showInfo={this.showInfo} handleInfo={this.handleInfo}/>
        })

        // console.log(this.state)
        return (
            <div className="container">
                <h1> Written Tickets </h1>
                
                <ol>
                    {tickets}
                </ol>
                { (this.state.showinfo) ? <DisplayTicket ticketInfo={this.state.info}/> : null   }
            </div>
        );
    }
}

export default TicketCollection;