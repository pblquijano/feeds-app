import update from 'immutability-helper';

import {
    FETCH_FEED_HEADLINE,
    FETCH_FEED_HEADLINE_FAILURE,
    FETCH_FEED_HEADLINE_SUCCESS,
} from './actionTypes';

const INITIAL_STATE = {
    feeds: {
        data: [],
        isFetching: false,
        errors: null,
    },
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FEED_HEADLINE:
            return update(state, {
                feeds: {
                    $merge: {
                        data: [],
                        isFetching: true,
                        errors: null,
                    },
                },
            });
        case FETCH_FEED_HEADLINE_SUCCESS:
            return update(state, {
                feeds: {
                    $merge: {
                        data: action.payload,
                        isFetching: false,
                    },
                },
            });
        case FETCH_FEED_HEADLINE_FAILURE:
            return update(state, {
                feeds: {
                    $merge: {
                        isFetching: false,
                        errors: action.payload,
                    },
                },
            });
        default:
            return state;
    }
}
