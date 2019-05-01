import React, { Component } from 'react';
import './users.css';

class Users extends Component {
    state = { users: [] }

    componentDidMount() {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                { this.state.users.map(user => <li key={user.id}>{user.fName} {user.lName}</li>) }
            </div>
        );
    }
}

export default Users;
