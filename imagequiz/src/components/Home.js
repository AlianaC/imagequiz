import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            showLoginForm: false,
            authenticated: false,
            flowers: [
                {id: 1, name: 'Daffodil', img: '/images/daffodil.png'},
                {id: 2, name: 'Cherry Blossom', img: '/images/cherryblossom.png'},
                {id: 3, name: 'Lily', img: '/images/lily.jpg'},
                {id: 4, name: 'Daisy', img: '/images/daisy.jpg'},
                {id: 5, name: 'Sunflower', img: '/images/sunflower.png'},
                {id: 6, name: 'Tulip', img: '/images/tulip.png'},
                {id: 7, name: 'Rose', img: '/images/rose.png'},
                {id: 8, name: 'Water Lily', img: '/images/waterlily.png'}
            ]
        };
    }

    login = () => {
        this.setState({showLoginForm:true});
    }

    onSubmit = (event) => {
        if(this.state.username.trim().length > 0){
            this.setState({authenticated: true});
        }
        event.preventDefault();
    }

    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    makeFlowerGrid = () => {
        return this.state.flowers.map((flower) => {
            const{id, name, img} = flower
            return(
                <tr key={id}>
                    <td>
                        <img src={process.env.PUBLIC_URL + img}></img>
                        <p>{name}</p>
                    </td>
                </tr>
            );
        })
    }

    render() {
        if((!this.state.authenticated) && this.state.showLoginForm){
            return(
                <div>
                    <form onSubmit={this.onSubmit}>
                        <label>Username: </label>
                        <input 
                        type="text" 
                        name="username"
                        value={this.state.username}
                        onChange={this.onInputChange}
                        ></input>
                        <button type="submit">Login</button>
                    </form>  
                </div>
            );
        }

        return (
            <div>
                <div className="loginButton">
                    {this.state.authenticated ? this.state.username
                    : <button onClick={this.login}>Login</button>}   
                </div>
                <div>hello from my homepage</div>
                <table id='flowers'>
                    <tbody>
                    {this.makeFlowerGrid()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;