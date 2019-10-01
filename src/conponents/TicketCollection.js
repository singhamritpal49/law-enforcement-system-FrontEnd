import React, { Component } from 'react';
import Ticket from './Ticket'
import DisplayTicket from './DisplayTicket';
// import Modal from ' react-awesome-modal';
import "../assets/display.css"

class TicketCollection extends Component {
    state= {
        visible: false,
        infoObj: {}
    }
    // onOpenModal = (event) => {
    //     this.setState({
    //         visible: true
    //     })
    // }

    openModal = () => {
        this.setState({ visible: true });
      };

    closeModal = () =>{
        this.setState({ visible: false });
    }
     

    handleInfo = (ticketToBeDisplayed) => {
        // console.log(ticketToBeDisplayed)
        this.setState({
            infoObj: ticketToBeDisplayed
        })
    }
   
    

    render() {
        // console.log(this.props);
        const tickets = this.props.tickets.map(ticket => {
        return <Ticket ticket={ticket} key={ticket.id} showInfo={this.openModal} handleInfo={this.handleInfo}/>
        })
        

        // console.log(this.state)
        // console.log(this.display())
        return (
            <div className="container">
                <h1> Written Tickets </h1>
                
                <ol>
                    {tickets}
                </ol>
                {/* { (this.state.visible) ? <DisplayTicket ticketInfo={this.state.infoObj}/> : null   } */}
                 {
                     (this.state.visible) ?
                 <div>
                 <h2>Case: {this.state.infoObj.case_number}</h2>
                 <p>Issued Date: {this.state.infoObj.date}</p>
                 <p>Time: {this.state.infoObj.time}</p>
                 <p>Type: {this.state.infoObj.ticket_type}</p>
                 <p>Description: {this.state.infoObj.description} </p>
                 <p>Location: {this.state.infoObj.location} </p>
                 <p>License Plate: {this.state.infoObj.vehicle_license_plate} </p>
                 
                 <h2> Issued To </h2> 
                 <p>First Name: {this.state.infoObj.civilian.first_name}</p>
                 <p>Middle Name: {this.state.infoObj.civilian.middle_name}</p>
                 <p>Last Name: {this.state.infoObj.civilian.last_name}</p>
                 <p>Sex: {this.state.infoObj.civilian.sex}</p>
                 <p>Eye Color: {this.state.infoObj.civilian.eyes}</p>
                 <p>Height: {this.state.infoObj.civilian.height}</p>
                 <p>Date of Birth: {this.state.infoObj.civilian.date_of_birth}</p>
                 <p>Social Security Number: {this.state.infoObj.civilian.social_security_number}</p>
                 <p>Driver License: {this.state.infoObj.civilian.driver_license}</p>
                 <p>Driver License Issue Date : {this.state.infoObj.civilian.driver_license_issue_date}</p>
                 <p>Driver License Expiration Date : {this.state.infoObj.civilian.driver_license_expiration_date}</p>
                 <p>Driver License Issue State : {this.state.infoObj.civilian.driver_license_issue_state}</p>
                 <p>Address: {this.state.infoObj.civilian.address1}</p>
                 <p>City: {this.state.infoObj.civilian.city}</p>
                 <p>State: {this.state.infoObj.civilian.state}</p>
                 <p>Zip Code: {this.state.infoObj.civilian.zip}</p>
                 <p>Country: {this.state.infoObj.civilian.country}</p>
                 <p>Cell: {this.state.infoObj.civilian.cell}</p>
                 <p>Home: {this.state.infoObj.civilian.phone}</p>
                 <button onClick={this.closeModal}>Close</button>
             </div>
                : null   }
                

            </div>
        );
    }
}

export default TicketCollection;