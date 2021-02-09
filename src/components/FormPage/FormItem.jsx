import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function FormItem({ FieldTitle, FieldDescription, children }) {
  return <>
    <Main__form_grid_title>{FieldTitle}</Main__form_grid_title>
      {children}
    <Main__form_grid_description>{FieldDescription}</Main__form_grid_description >
  </>
}

FormItem.propTypes = {
  FieldTitle: PropTypes.string,
  FieldDescription: PropTypes.string,
  children: PropTypes.object
}

const Main__form_grid_title = styled.p`
  font-size: 3vh;
  letter-spacing: -0.1vh;
  @media screen and (max-width: 70vh) {
    font-size: 2.8vh;
  }
`

const Main__form_grid_description = styled.p`
  margin-left: 10%;
  display: flex;
  align-items: flex-start;
  font-size: 1.8vh;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
  @media screen and (max-width: 105vh) {
    display: none;
  }
`

export default FormItem;