import React from "react";
import Tile from './Tile'
import './Home.scss'
import * as StealthbitsService from './services/StealthbitsService'

export class Home extends React.Component {
    state = {
        computers: null,
        users: null
    }

    async componentDidMount() {
        const { computers, users } = await StealthbitsService.getDashboard()

        this.setState({
            computers, users
        })
    }

    render() {
        return (<div className="home">
            <h2>Home</h2>

            <div className="home__tiles">
                <Tile
                    label="Users"
                    value={this.state.users}
                    icon="user"
                    to="/users"
                />

                <Tile
                    label="Computers"
                    icon="desktop"
                    value={this.state.computers}
                    to="/computers"
                />
            </div>

            <div className="home__footer">
                <span role="img" aria-label="Rocket">🚀</span>
                Made by Alex
            </div>
        </div>)
    }
}