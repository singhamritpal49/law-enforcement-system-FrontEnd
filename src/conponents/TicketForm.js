// import Select from 'react-select';
import React, { Component } from 'react';
import SearchCivilian from './SearchCivilian'
class TicketForm extends Component {
    state = {
        date: '',
        time: '',
        location: '',
        vehicle_license_plate: '',
        ticket_type: '',
        descripition: '',
        civilians: []
    }

    componentDidMount() {
        fetch("http://localhost:3000/civilians")
            .then(res => res.json())
            .then(civilians => this.setState({
                civilians: civilians
            }))
    }

    handleCivilian = (ssn) => {
        this.state.civilians.find(civilian => {
            //  civilian.social_security_number == ssn
            if (civilian.social_security_number === ssn) {
                return civilian.id
            }
        })
    }

    render() {
        // console.log(this.props)

        let curr = new Date();
        curr.setDate(curr.getDate());
        let date = curr.toISOString().substr(0, 10);
        // console.log(this.props)
        return (


            <div>
                <div>

                </div>
                <form id="login">
                    <h1>Search Using Name or SSN</h1> <SearchCivilian handleCivilian={this.handleCivilian} civilians={this.state.civilians} />
                    {/* <Select options={civilians} /> */}

                    <input type="hidden" civilian_id={this.handleCivilian()} />
                    <label for="date">Date </label>
                    <input type="date" name="date" id="date" defaultValue={date} />
                    <br />
                    <label for="time">Time </label>
                    <input type="time" name="time" id="time" />
                    <br />
                    <label for="location">Location </label>
                    <input type="text" name="location" id="location" />
                    <br />
                    <label for="vehicle_license_plate">Vehicle License Plate </label>
                    <input type="text" name="vehicle_license_plate" id="vehicle_license_plate" />
                    <br />
                    <label for="ticket_type">Ticket Type </label>
                    <input type="text" name="ticket_type" id="ticket_type" />
                    <br />
                    <p>Descripition:
                    <textarea name="message" rows="5" cols="33" ></textarea>
                    </p>

                    <input type="submit" value="Submit" />

                </form>

            </div>
        );
    }
}

export default TicketForm;
