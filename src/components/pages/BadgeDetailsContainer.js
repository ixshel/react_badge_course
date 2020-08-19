import React, { Component } from 'react';

// Components
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import BadgeDetails from './BadgeDetails';


class BadgeDetailsContainer extends Component {
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
          data.id = this.props.match.params.badgeId;
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

        return (<BadgeDetails badge={this.state.data} />);
      }
    }

export default BadgeDetailsContainer;