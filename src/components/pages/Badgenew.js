import React from 'react';

// Images
import Logo from '../../images/RedlandsConf.png';

// Styles
import './styles/BadgeNew.css';

// Components
import Badge from '../Badge';
import BadgeForm from '../BadgeForm';
import PageLoading from '../PageLoading';
// import api from '../../api';

class BadgeNew extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null })
        try {
            // await api.badges.create(this.state.form);
            
            await fetch('https://us-central1-reactbadges.cloudfunctions.net/addBadge', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.form)
            })

            this.setState({ loading: false });
            this.props.history.push(`/badges`);
        } catch (error) {
            console.error(error.message)
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid BadgeNew__hero-image" src={Logo} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <Badge
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                email={this.state.form.email || 'Email'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                twitter={this.state.form.twitter || 'twitter'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;
