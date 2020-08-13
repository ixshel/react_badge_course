import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// Styles
import './styles/BadgesList.css'
import Gravatar from './Gravatar';

export default class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No data found</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create a new Badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map((badge) => {
                    return (
                        <li key={badge.id} className="BadgesListItem">
                            {/* <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar" /> */}
                            <Gravatar className="BadgesListItem__avatar" email={badge.email} />
                            <div>
                                <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                                <div className="Twitter__name">
                                    <span className="Twitter__logo"></span>@{badge.twitter}
                                </div>
                                <div>{badge.jobTitle}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
