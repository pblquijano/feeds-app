import API from '../.';
export const getFeedHeadline = (country = 'mx') =>
    API.get(
        `top-headlines?country=${country}&apiKey=84d3d6c8586c4134a341e4144feba02f`
    );
