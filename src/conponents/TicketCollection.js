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
            
            <div id="writtentickets"  >
                <h1> Written Tickets </h1>
                
                <ol>
                    {tickets}
                </ol>
                {/* { (this.state.visible) ? <DisplayTicket ticketInfo={this.state.infoObj}/> : null   } */}
                 {
                     (this.state.visible) ?
                    <section>
                        <h2>Case: {this.state.infoObj.case_number}</h2>
                        <p><b>Issued Date:</b> {this.state.infoObj.date}</p>
                        <p><b>Time:</b> {this.state.infoObj.time}</p>
                        <p><b>Type:</b> {this.state.infoObj.ticket_type}</p>
                        <p><b>Description:</b> {this.state.infoObj.description} </p>
                        <p><b>Location:</b> {this.state.infoObj.location} </p>
                        <p><b>License Plate:</b> {this.state.infoObj.vehicle_license_plate} </p>
                        
                        <h2> Issued To </h2> 
                        <p><b>First Name:</b> {this.state.infoObj.civilian.first_name}</p>
                        <p><b>Middle Name:</b> {this.state.infoObj.civilian.middle_name}</p>
                        <p><b>Last Name:</b> {this.state.infoObj.civilian.last_name}</p>
                        <p><b>Sex:</b> {this.state.infoObj.civilian.sex}</p>
                        <p><b>Eye Color:</b> {this.state.infoObj.civilian.eyes}</p>
                        <p><b>Height:</b> {this.state.infoObj.civilian.height}</p>
                        <p><b>Date of Birth:</b> {this.state.infoObj.civilian.date_of_birth}</p>
                        <p><b>Social Security Number:</b> {this.state.infoObj.civilian.social_security_number}</p>
                        <p><b>Driver License:</b> {this.state.infoObj.civilian.driver_license}</p>
                        <p><b>Driver License Issue Date:</b> {this.state.infoObj.civilian.driver_license_issue_date}</p>
                        <p><b>Driver License Expiration Date:</b> {this.state.infoObj.civilian.driver_license_expiration_date}</p>
                        <p><b>Driver License Issue State:</b> {this.state.infoObj.civilian.driver_license_issue_state}</p>
                        <p><b>Address:</b> {this.state.infoObj.civilian.address1}</p>
                        <p><b>City:</b> {this.state.infoObj.civilian.city}</p>
                        <p><b>State:</b> {this.state.infoObj.civilian.state}</p>
                        <p><b>Zip Code:</b> {this.state.infoObj.civilian.zip}</p>
                        <p><b>Country:</b> {this.state.infoObj.civilian.country}</p>
                        <p><b>Cell:</b> {this.state.infoObj.civilian.cell}</p>
                        <p><b>Home:</b> {this.state.infoObj.civilian.phone}</p>
                        <button class="myButton" onClick={this.closeModal}>Close</button>
                    </section>
                : null   }
                

            </div>
        );
    }
}

export default TicketCollection;