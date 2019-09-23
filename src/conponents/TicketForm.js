import React, { Component } from 'react';

class TicketForm extends Component {
    render() {
        return (
            <div>
                <form id="login">
                    <label for="case-number">Case Number: </label>
                    <input type="text" name="case-number" id="case-number" placeholder="Case Number"/>
                    <br/>
                    <label for="date">Date </label>
                    <input type="date" name="date" id="date" />
                    <br/>
                    <label for="time">Time </label>
                    <input type="time" name="time" id="time" />
                    <br/>
                    <label for="location">Location </label>
                    <input type="text" name="location" id="location" />
                    <br/>
                    <label for="ticket-type">Ticket Type </label>
                    <input type="text" name="ticket-type" id="ticket-type" />
                    <br/>
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