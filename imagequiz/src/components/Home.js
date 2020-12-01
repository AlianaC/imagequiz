import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import server from '../ServerInterface/server.js';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            data: [],
            flowers: [
                {name: 'Daffodil', img: '/images/daffodil.png'},
                {name: 'Cherry Blossom', img: '/images/cherryblossom.png'},
                {name: 'Lily', img: '/images/lily.jpg'}
                //{name: 'Daisy', img: '/images/daisy.jpg'},
                //{name: 'Sunflower', img: '/images/sunflower.png'},
                //{name: 'Tulip', img: '/images/tulip.png'},
                //{name: 'Rose', img: '/images/rose.png'},
                //{name: 'Water Lily', img: '/images/waterlily.png'}
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

    componentDidMount() {
        this.setState({data: server.getQuizzes()})
        //server.getQuizzes().then(data => this.setState({data: data}));
    }

    body = () => {
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
                {this.state.data.length > 0 ?
                    <div>
                        {this.state.data.map((q, i) =>
                            <div className="pictureDiv" key={i}>
                                <Link className="qLink" to={{
                                    pathname: "\quiz", state:
                                    {id: q.id, user: username}
                                }}>
                                <img src={process.env.PUBLIC_URL + q.picture} alt="flower"></img>
                                </Link>
                                <figcaption className="flowerName"><b>{q.name}</b></figcaption>
                            </div>
                        )}
                    </div>
                : ""}
            </div>
        );
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
                    {this.body()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;