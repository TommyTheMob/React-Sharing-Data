import React from "react";
// import UserProfile from './01/UserProfile.jsx'
// import UserMenu from './01/UserMenu.jsx'
import ShoppingCart from './02/ShoppingCart.jsx'
import Profile from './02/Profile.jsx'



class App extends React.Component {
    state = {
        userData: {
            firstName: 'John',
            lastName: 'Doe'
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value
            }
        })
    }

    render() {
        return (
            <>
                <div className="page">
                    <main className="content">
                        <ShoppingCart userData={this.state.userData} />
                        <Profile userData={this.state.userData} handleChange={this.handleChange} />
                    </main>
                </div>
            </>
        )
    }
}

// class App extends React.Component {
//     state = {
//         userData: null
//     }
//
//     componentDidMount() {
//         this.fetchUserData(this.props.userId)
//     }
//
//     fetchUserData = UserId => {
//         const userUrl = `https://api.github.com/users/${UserId}`
//         fetch(userUrl)
//             .then(response => response.json())
//             .then(userData =>
//                 this.setState({
//                     userData
//                 })
//             )
//     }
//
//     render() {
//         return (
//             <>
//                 <header className="header">
//                     <UserMenu userData={this.state.userData} />
//                 </header>
//                 <UserProfile userData={this.state.userData} />
//             </>
//         )
//     }
// }

export default App