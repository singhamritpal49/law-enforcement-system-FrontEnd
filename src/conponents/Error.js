import React, { Component } from 'react';
import '../LoginCSS.css';
import {Link } from 'react-router-dom'

class Error extends Component {
    render() {
        return (
            <div id="login">
                <h1 >
                    403 Access Forbidden
                </h1>
                <p>
                    This information system is intended for non-sensitive unclassified business only.
    Unauthorized access or use is a violation of law and may lead to prosecution.
                </p>
                <br />
                <p> <i>For security purposes your IP address 102.312.11.1  has been logged  </i> </p>
                <Link to="/">
     <button type="button">
          Login Page
     </button>
 </Link>
            </div>
        );
    }
}

export default Error;