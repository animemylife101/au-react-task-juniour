import React, { useEffect, useRef, useState } from 'react';
import ContentEditable from '../../lib/status.jsx';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function Header(props) {
    const [boolean, setState] = useState(false);
    const status = useRef(props.profileStatus);
    const statusFocus = useRef();
    // hooks

    const activateMood = () => {
        setState(true);
        statusFocus.current.el.current.focus();
    }

    const deactivateMood = () => {
        setState(false);
        props.setHeaderStatus(status.current);
    }

    const handleChange = evt => {
        status.current = evt.target.value;
        // validaton error
    };

    return <>
        <Header__greeting>
            <Header__greeting_title>
                <Header__greeting_title_welcome>
                    Здравствуйте
                    </Header__greeting_title_welcome>, Человек №3596941
                </Header__greeting_title>
            <Header__greeting_link onClick={activateMood}>
                Сменить статус
            </Header__greeting_link>
        </Header__greeting>

        <Header__status>
            <Header__status_triangle></Header__status_triangle>
            <ContentEditable disabled={boolean ? false : true} ref={statusFocus}
                onDoubleClick={activateMood} html={status.current} onBlur={deactivateMood}
                style={Header__status_item} onChange={handleChange} />
        </Header__status>
    </>
}

Header.propTypes = {
    profileStatus: PropTypes.string,
    setProfileStatus: PropTypes.func
}

const Header__greeting = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 98;
`

const Header__status = styled.div`
    margin: auto;    
    margin-top: 1vh;
    text-align: center;
    position: relative;
    width: 50%;
`

const Header__status_triangle = styled.div`
    left: 29%;
    top: -2vh;
    position: absolute;
    width: 0;
    height: 0;
    border-left: 4vh solid transparent;
    border-right: 4vh solid transparent;
    border-bottom: 4vh solid #EAEAEA;
`
const Header__status_item = {
    padding: '2vh',
    textAlign: 'left',
    width: 'ihnerit',
    margin: 'auto',
    backgroundColor: '#EAEAEA',
    border: 'none',
    outline: 'none',
    resize: 'none',
    overflow: 'hidden',
    textAlign: 'left',
}

const Header__greeting_title = styled.h1`
    margin-right: 5vh;
    color: #000000;
    @media screen and (max-width: 160vh) {
        margin-right: -6vh;
    }
    @media screen and (max-width: 85vh) {
        font-size: 3.2vh;
        display: flex;
        margin-right: 0vh;
    }
`

const Header__greeting_title_welcome = styled.span`
    color: #666666;
`

const Header__greeting_link = styled.span`
    color:#0C77BB;
    border-bottom: 1px dashed #0C77BB;
    @media screen and (max-width: 85vh) {
        display: none;
    }
`

export default Header;
