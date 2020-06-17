import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { push } from 'connected-react-router';
import styled from 'styled-components';

import { Buttons } from '../../common/components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const Container = ({ redirect }) => {
    return (
        <StyledContainer>
            <Buttons.NormalButton onClick={() => redirect('/feeds')}>
                Iniciar
            </Buttons.NormalButton>
        </StyledContainer>
    );
};

const mapDispatcherToProps = dispatch => ({
    redirect: link => dispatch(push(link)),
});

export default compose(
    connect(null, mapDispatcherToProps),
    withRouter
)(Container);
