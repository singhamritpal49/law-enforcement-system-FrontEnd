import React, { Component } from 'react';
import '../LoginCSS.css';
// import TicketForm from './TicketForm'


class Login extends Component {
    state = {
        badge: '',
        password: ''
    }

    


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {

        event.preventDefault()
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    // this.props.redirect('profile')
                    this.props.history.push('/profile')
                } else {
                    alert("Invalid Login Credentials")
                }
            })
    }


    render() {
        // console.log(this.state)
        return (
            <div>
                <div id="logo">
                    <img src="./logo.png" alt="" />
                </div>

                <div class="login">
                <div class="login-triangle">

                        <h2 class="login-header">User Login</h2>
                    <form class="login-container"   onSubmit={this.handleSubmit} >
                        <p><input onChange={this.handleChange} value={this.state.badge} type="text" name="badge" id="badge" required placeholder="User ID" name="badge"></input></p>
                        <br />
                        <p><input onChange={this.handleChange} value={this.state.password} type="password" name="password" id="password" required placeholder="Password" name="password" ></input></p>
                        <br />
                        <p><input type="submit" value="Submit" /></p>

                    </form>

                </div>
                </div>
            </div>



        )
    }
}
export default Login;