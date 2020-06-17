import React from 'react';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { Route, Switch } from 'react-router-dom';

import feeds from '../feeds';
import login from '../login';

export default () => {
    return (
        <Switch>
            <Route path="/login" render={matchProps => <login.Container {...matchProps}/>} />
            <Route path="/" render={matchProps => <feeds.Container {...matchProps}/>} />
        </Switch>
    );
};
