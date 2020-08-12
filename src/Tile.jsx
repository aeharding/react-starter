import React from 'react'
import numberFormatter from './utils/numberFormatter'
import './Tile.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Tile extends React.Component {
    render() {
        return (
            <Link
                className="tile"
                to={this.props.to}
            >
                <div className="tile__label">
                    {this.props.label}
                </div>

                <FontAwesomeIcon
                    icon={this.props.icon}
                    className="tile__icon"
                />

                <div className="tile__value">
                    {this.props.value ? numberFormatter(this.props.value) : '-'}
                </div>
            </Link>
        )
    }
}