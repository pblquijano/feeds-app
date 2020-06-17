import {NAME} from './constants';
import {createSelector} from 'reselect';

export const getModel = state => state[NAME];

export const getFeedsModel = createSelector(
    getModel,
    model => model.feeds
);

export const getFeedsData = createSelector(
    getFeedsModel,
    model => model.data
);

export const isFetchingFeeds = createSelector(
    getFeedsModel,
    model => model.isFetching
);

export const getFeedsErrors = createSelector(
    getModel,
    model => model.errors
);