import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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

    makeFlowerGrid = () => {
        let flowers = this.state.flowers;
        let grid = []
        let row = []
        for (let i = 0; i < flowers.length; i++){
            let{name, img} = flowers[i]
            if(row.length === 4){
                grid.push(<tr>{row}</tr>)
                row = []
            }
            let quiz = {pathname: "/quiz", state: {flowerName: name}};
            row.push(
                <td>
                <Link to={quiz}>
                <img src={process.env.PUBLIC_URL + img} alt="flower"></img>
                </Link>
                <p className="flowerName">{name}</p>
                </td>
            )
            
        }
        grid.push(<tr>{row}</tr>)
        return grid
    }

    render() {
        let username = "";
        const location = this.props.location;
        if(location){
            if(location.state){
                if(location.state.user){
                    username = location.state.user;
                }
            }
        }

        return (
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username
                    : <Link to="/login"><button type="text">Login</button></Link>}   
                </div>
                <h2 className="homepageHeader">Image Quiz Homepage</h2>
                <table className="flowerTable">
                    <tbody>
                    {this.makeFlowerGrid()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;