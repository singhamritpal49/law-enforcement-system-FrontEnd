import React, { Component } from 'react';



class Ticket extends Component {
    


 handleClick = (event) => {
    //  console.log(event)
     this.props.showInfo()
    this.props.handleInfo(event)

 }  



    render() {
// console.log(this.state)
        // console.log(this.props.ticket)
        return (
            
            <div>
                <ul  onClick={() => this.handleClick(this.props.ticket)}>
                    <li class="cool-link" > Case Number: {this.props.ticket.case_number} </li>
                </ul>
                
            </div>
            
            
            
        );
    }
}

export default Ticket;