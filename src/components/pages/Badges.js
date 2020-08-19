import React, { Component } from 'react'
import Logo from '../../images/RedlandsConf.png'

// Componengts
import BadgesList from '../BadgesList';

// Styles
import './styles/Badges.css'
import { Link } from 'react-router-dom';

// API
// import api from '../../api';
import PageLoading from '../PageLoading';
import PageError from '../PageError';

export default class Badges extends Component {

    constructor(props) {
        super(props);
        console.log('1. constructor()');

        this.state = {
            loading: true,
            error: null,
            data: []
        };
    }

    fetchData = async () => {
        this.setState({loading: true,error: null});
            try {
                // const data = await api.badges.list();
                
                const api = await fetch('https://us-central1-reactbadges.cloudfunctions.net/badges');
                const data = await api.json();
                this.setState({ loading: false, data: data });
            } catch (error) {
                this.setState({loading: false, data: undefined, error: error})
            }
     }

    componentDidMount() {
        console.log(`3. componentDidMount`);

        // this.timeoutId = setTimeout(() => {
            this.fetchData();
        // }, 3000);

         // Pull data to autorefresh it - would be better with sockets
        const intervalID = setInterval(() => {
           this.fetchData(); 
        }, 5000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`5. ComponentDidUpdate()`);
        console.log({
            prevProps: prevProps, prevState: prevState
        });

        console.log({
            props: this.props, state: this.state
        });
    }

    componentWillUnmount() {
        console.log('6. ComponentWillUnmount()');
        clearTimeout(this.intervalID); // limpiar o liberar memoria - evita que el intervalo siga trabajando en un componente que ya no esta
    }

    render() {
        console.log(`2/4. Render()`);
        if (this.state.loading && ( this.state.data.length === 0 || !this.state.data )) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo" src={Logo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                            </div>
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
