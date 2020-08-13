import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader';

function PageLoading() {
    return (
        <div className="PageLoading">
            <Loader />
            Loading...
        </div>
    );
}

export default PageLoading;