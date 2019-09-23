import React, { Component } from 'react';
import '../LoginCSS.css';
class Profile extends Component {
    state = {
        name: ''
    }

    componentDidMount() {
        fetch("http://localhost:3000/profile", {
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(data => data.json())
        .then(user => this.setState({name: user.first_name}))
    }
    

    render() {
        
        return (
            <div>
                 {
                     this.state.name ?
                     <h1>Welcome Officer {this.state.name} </h1> :

                    //  <h1 className="loader" id="login"></h1>
                    <div id="login"class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                 }
                {/* <button>Log Out</button> */}
            </div>
        );
    }
}

export default Profile;