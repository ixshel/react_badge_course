import React from "react";
import { Link } from "react-router-dom";

// Images
import Logo from '../../images/RedlandsConf.png';

// Styles
import './styles/BadgeDetails.css';

// Components
import Badge from '../Badge';

function BadgeDetails(props) {
  const badge = props.badge;

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 text-center">
              <img src={Logo} alt="Logo de la conferencia" />
            </div>
            <div className="col-md-6 col-sm-12 text-center BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>

          <div className="col-md-6 col-sm-12">
            <h2>Actions</h2>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badge/${badge.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
