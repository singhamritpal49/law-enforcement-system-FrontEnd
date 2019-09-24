import Select from 'react-select';

import React, { Component } from 'react';

class TicketForm extends Component {
    state = {
        date: '',
        time: '',
        location: '',
        vehicle_license_plate: '',
        ticket_type: '',
        descripition: '',
        civilians: [],
        search: ''
        
    }

    componentDidMount() {
        fetch("http://localhost:3000/civilians")
            .then(res => res.json())
            .then(civilians => this.setState({
                civilians: civilians
            }))
    }



    render() {
        console.log(this.state)

        let curr = new Date();
        curr.setDate(curr.getDate());
        let date = curr.toISOString().substr(0, 10);

        // const civilianss = this.state.civilians

        const civilians = [
            { label: this.state.civilians.name, value: this.state.civilians.id },
          ];

        
      

        return (


            <div>
                <div>
                    

                </div>
                <form id="login">
                {/* <Select options={civilians} /> */}

                    <input type="hidden" officer_id={this.props.officerid} />
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
