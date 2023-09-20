import React from "react";
import './userForm.scss'

class UserForm extends React.Component {
    render() {
        return (
            <form className="user-form">
                <input
                    type="text"
                    name="firstName"
                    className="user-form__input"
                    value={this.props.userData.firstName}
                    onChange={this.props.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    className="user-form__input"
                    value={this.props.userData.lastName}
                    onChange={this.props.handleChange}
                />
            </form>
        )
    }
}

export default UserForm