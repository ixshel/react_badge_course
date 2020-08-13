import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Badges from './pages/Badges';
import BadgeNew from './pages/Badgenew';
import Layout from './Layout';
import NotFound from './pages/NotFound';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/badges" component={Badges} />
                        <Route exact path="/badges/new" component={BadgeNew} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;