import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/spce_redlands_conf.png';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    // Define el resultado a ver en pantalla
    render() {

        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>

                <div className="Badge__section-name">
                    <Gravatar className="Badge__avatar" email={this.props.email} />
                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>
                
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #redlandsdevconf
                </div>
            </div>
        )
    }
}

export default Badge;