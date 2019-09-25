// import Select from 'react-select';
import React, { Component } from 'react';
import SearchCivilian from './SearchCivilian'
class TicketForm extends Component {
    state = {
        civilian_id: '',
        date: '',
        time: '',
        location: '',
        vehicle_license_plate: '',
        ticket_type: '',
        descripition: '',
        civilians: [],
        officer_id: ''
    }

    componentDidMount() {
        fetch("http://localhost:3000/civilians")
            .then(res => res.json())
            .then(civilians => this.setState({
                civilians: civilians
            }))
    }

    handleCivilian = (ssn) => {
        // console.log(ssn)
        this.state.civilians.find(civilian => {
            //  civilian.social_security_number == ssn
            if (civilian.social_security_number === ssn) {
                this.setState({
                    civilian_id: civilian.id
                })
                // console.log(civilian.id)
            }
        })
    }

    handleChange = (event) => {
        // console.log(event.target)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event)
    }


    render() {
        console.log(this.props)

        let curr = new Date();
        curr.setDate(curr.getDate() + 1 );
        let date = curr.toISOString().substr(0, 10);
        // console.log(this.props)
        return (


            <div className="container">
                <div>

                </div>
                <form id="login" onSubmit={this.handleSubmit}>
                    <h1>Search Using Name or SSN</h1> <SearchCivilian handleCivilian={this.handleCivilian} civilians={this.state.civilians} />
                    
                    {/* <input onChange={this.handleChange} value={this.state.officer_id} type="hidden" officer_id={this.props.officerid} name="officer_id"/> */}
                    
                    
                    {/* <label for="date">Date </label> */}
                    <input onChange={this.handleChange} type="date" name="date" id="date" defaultValue={date} name="date" />
                    <br />

                    <label >Time </label>
                    <input value={this.state.time} onChange={this.handleChange} type="time"  id="time" name="time" />
                    <br />

                    <label for="location">Location </label>
                    <input value={this.state.location} onChange={this.handleChange} type="text" name="location" id="location" name="location" />
                    <br />

                    <label for="vehicle_license_plate">Vehicle License Plate </label>
                    <input value={this.state.vehicle_license_plate} onChange={this.handleChange} type="text" name="vehicle_license_plate" id="vehicle_license_plate" />
                    <br />

                    <label for="ticket_type">Ticket Type </label>
                    <input value={this.state.ticket_type} onChange={this.handleChange} type="text" name="ticket_type" id="ticket_type" name="ticket_type" />
                    <br />

                    <p>Descripition:
                    <textarea value={this.state.descripition} onChange={this.handleChange} name="descripition" rows="5" cols="33" />
                    </p>

                    <input type="submit" value="Submit" />

                </form>

            </div>
        );
    }
}

export default TicketForm;
