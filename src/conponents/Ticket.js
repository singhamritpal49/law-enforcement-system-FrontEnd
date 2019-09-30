import React, { Component } from 'react';


class Ticket extends Component {



    handleClick = (event) => {
        console.log(event)
    }

    render() {

        // console.log(this.props.ticket)
        return (

            <div>
                <ol onClick={() => this.handleClick(this.props.ticket)}>
                    <li> {this.props.ticket.case_number} </li>
                </ol>
            </div>
        );
    }
}

export default Ticket;