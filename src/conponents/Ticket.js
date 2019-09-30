import React, { Component } from 'react';



class Ticket extends Component {
    


 handleClick = (e) => {
     this.props.showInfo()
    this.props.handleInfo(e)

 }  



    render() {
// console.log(this.state)
        // console.log(this.props.ticket)
        return (
            
            <div>
                <ul onClick={() => this.handleClick(this.props.ticket)}>
                    <li> Case Number: {this.props.ticket.case_number} </li>
                </ul>
            </div>
            
            
            
        );
    }
}

export default Ticket;