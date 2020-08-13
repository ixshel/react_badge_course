import React from 'react'
import "./styles/PageError.css";

export default function PageError (props) {
        return (
            <div className="PageError">
                <span role="img" aria-label="1">❌</span> {props.error.message} <span role="img" aria-label="1">🙀</span>
            </div>
        )
}
