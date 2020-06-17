import React from 'react';

import { connect } from 'react-redux';
import { withRouter, Router } from 'react-router-dom';
import { compose } from 'recompose';

import main from './modules/main';

const App = ({ history }) => {
    return (
        <Router history={history}>
            <main.Container />
        </Router>
    );
};

export default compose(connect(null), withRouter)(App);
