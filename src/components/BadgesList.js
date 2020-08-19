import React, { Component } from "react";
import { Link } from "react-router-dom";

import BadgesListItem from "./BadgesListItem";

// Styles
import "./styles/BadgesList.css";

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No data found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create a new Badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`badge/${badge.id}/edit`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
