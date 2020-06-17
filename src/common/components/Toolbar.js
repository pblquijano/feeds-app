import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    width: 100%;
    padding: 0 16px;
`;

const Title = styled.h1`
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    color: #000;
`;

const Toolbar = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    );
};

Toolbar.propTypes = {
    title: PropTypes.string,
};

export default Toolbar;
