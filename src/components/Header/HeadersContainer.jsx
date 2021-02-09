import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setHeaderStatus } from '../../redux/reducers/header-reducer';
import { getStatus } from '../../redux/reselects/header-reselect';

const HeaderContainer = (props) => {
    return <Header {...props} />
}

const mapStateToProps = (state) => {
    let status = getStatus(state);
    return {
        profileStatus: status
    }
};

export default connect(mapStateToProps, { setHeaderStatus })(HeaderContainer)