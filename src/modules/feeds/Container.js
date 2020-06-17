import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { Toolbar } from '../../common/components';
import * as actions from './actions';
import * as selectors from './selectors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Container = ({ feeds, fetchFeeds, isFetching }) => {
    useEffect(() => {
        fetchFeeds();
    }, []);

    return (
        <Wrapper>
            <Toolbar title="My News Feed" />
        </Wrapper>
    );
};

Container.propTypes = {
    feeds: PropTypes.array,
    isFetching: PropTypes.bool,
    fetchFeeds: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    feeds: selectors.getFeedsData,
    isFetching: selectors.isFetchingFeeds,
});

const mapDispatcherToProps = dispatch => ({
    fetchFeeds: () => dispatch(actions.fetchFeeds()),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Container);
