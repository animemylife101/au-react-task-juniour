import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = ({input, meta, type}) => {
    const hasError = meta.error && meta.touched;
    return <Main__form_grid_field>
        <Main__form_grid_fieldInput {...input} type = {type} hasError = {hasError}></Main__form_grid_fieldInput>
        {meta.touched && <Main__form_grid_error>{meta.error}</Main__form_grid_error>}
    </Main__form_grid_field>
}

Input.propTypes = {
    type: PropTypes.string,
    meta: PropTypes.object,
    input: PropTypes.object
}

const Main__form_grid_field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Main__form_grid_fieldInput = styled.input`
    padding: 1vh;
    border: ${props => props.hasError ? '0.2vh solid red' : '0.2vh solid black' };
    outline: none;
    @media screen and (max-width: 105vh) {
        height: 3vh;
    }
`
const Main__form_grid_error = styled.span`
    position: absolute;
    color: #FF0000;
    top: 5.2vh;
    @media screen and (max-width: 70vh) {
        font-size: 2vh;
    }
`