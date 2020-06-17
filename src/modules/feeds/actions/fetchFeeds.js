import { getFeedHeadline } from '../../../common/api/feeds';

import {
    FETCH_FEED_HEADLINE,
    FETCH_FEED_HEADLINE_FAILURE,
    FETCH_FEED_HEADLINE_SUCCESS,
} from '../actionTypes';

export default () => dispatch => {
    dispatch({ type: FETCH_FEED_HEADLINE });
    getFeedHeadline()
        .then(response => {
            dispatch({
                type: FETCH_FEED_HEADLINE_SUCCESS,
                payload: response.data.articles,
            });
        })
        .catch(error => {
            dispatch({
                type: FETCH_FEED_HEADLINE_FAILURE,
            });
        });
};
