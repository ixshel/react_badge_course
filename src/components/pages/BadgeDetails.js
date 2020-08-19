import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import Logo from '../../images/RedlandsConf.png';

// Styles
import './styles/BadgeDetails.css';

// Components
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import Badge from '../Badge';

class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() { 
    this.fetchData();
   }

  fetchData = async () => { 
    this.setState({ loading: true, error: null });

    try {
      const api = await fetch(`https://us-central1-reactbadges.cloudfunctions.net/badge/${this.props.match.params.badgeId}`);
      const data = await api.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
   }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    const badge = this.state.data;

    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 text-center">
                <img src={Logo} alt="Logo de la conferencia" />
              </div>
              <div className="col-md-6 col-sm-12 text-center BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <Badge firstName={badge.firstName} lastName={badge.lastName} email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle}/>
            </div>

            <div className="col-md-6 col-sm-12">
              <h2>Actions</h2>
              <div>
                <Link className="btn btn-primary mb-4" to={`/badge/${this.props.match.params.badgeId}/edit`}>Edit</Link>
              </div>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;
