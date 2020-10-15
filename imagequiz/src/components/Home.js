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
                {name: 'Daffodil', img: '/images/daffodil.png'},
                {name: 'Cherry Blossom', img: '/images/cherryblossom.png'},
                {name: 'Lily', img: '/images/lily.jpg'},
                {name: 'Daisy', img: '/images/daisy.jpg'},
                {name: 'Sunflower', img: '/images/sunflower.png'},
                {name: 'Tulip', img: '/images/tulip.png'},
                {name: 'Rose', img: '/images/rose.png'},
                {name: 'Water Lily', img: '/images/waterlily.png'}
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
        let flowers = this.state.flowers;
        let grid = []
        let row = []
        for (let i = 0; i < flowers.length; i++){
            let{name, img} = flowers[i]
            if(row.length == 4){
                grid.push(<tr>{row}</tr>)
                row = []
            }
            row.push(<td>
                <img src={process.env.PUBLIC_URL + img}></img>
                <p>{name}</p>
                </td>)
            
        }
        grid.push(<tr>{row}</tr>)
        return grid
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
                <div><h3>Hello, From My Homepage</h3></div>
                <table className='flowerTable'>
                    <tbody>
                    {this.makeFlowerGrid()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;