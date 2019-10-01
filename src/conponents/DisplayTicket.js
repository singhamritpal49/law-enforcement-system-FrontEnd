import React, { Component } from 'react';
import '../LoginCSS.css';
import Modal from 'react-responsive-modal';

class DisplayTicket extends Component {
    state = {
        open: false
    }

    render() {
        // console.log(this.props)
        return (
            <div >
                <h2>Case: {this.props.ticketInfo.case_number}</h2>
                <p>Issued Date: {this.props.ticketInfo.date}</p>
                <p>Time: {this.props.ticketInfo.time}</p>
                <p>Type: {this.props.ticketInfo.ticket_type}</p>
                <p>Description: {this.props.ticketInfo.description} </p>
                <p>Location: {this.props.ticketInfo.location} </p>
                <p>License Plate: {this.props.ticketInfo.vehicle_license_plate} </p>
                
                <h2> Issued To </h2> 
                <p>First Name: {this.props.ticketInfo.civilian.first_name}</p>
                <p>Middle Name: {this.props.ticketInfo.civilian.middle_name}</p>
                <p>Last Name: {this.props.ticketInfo.civilian.last_name}</p>
                <p>Sex: {this.props.ticketInfo.civilian.sex}</p>
                <p>Eye Color: {this.props.ticketInfo.civilian.eyes}</p>
                <p>Height: {this.props.ticketInfo.civilian.height}</p>
                <p>Date of Birth: {this.props.ticketInfo.civilian.date_of_birth}</p>
                <p>Social Security Number: {this.props.ticketInfo.civilian.social_security_number}</p>
                <p>Driver License: {this.props.ticketInfo.civilian.driver_license}</p>
                <p>Driver License Issue Date : {this.props.ticketInfo.civilian.driver_license_issue_date}</p>
                <p>Driver License Expiration Date : {this.props.ticketInfo.civilian.driver_license_expiration_date}</p>
                <p>Driver License Issue State : {this.props.ticketInfo.civilian.driver_license_issue_state}</p>
                <p>Address: {this.props.ticketInfo.civilian.address1}</p>
                <p>City: {this.props.ticketInfo.civilian.city}</p>
                <p>State: {this.props.ticketInfo.civilian.state}</p>
                <p>Zip Code: {this.props.ticketInfo.civilian.zip}</p>
                <p>Country: {this.props.ticketInfo.civilian.country}</p>
                <p>Cell: {this.props.ticketInfo.civilian.cell}</p>
                <p>Home: {this.props.ticketInfo.civilian.phone}</p>
            </div>
        );
    }
}

export default DisplayTicket;