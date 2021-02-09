import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectionItem = (props) => {
  return <Main__form_grid_select>
    {props.result.map((a) => {
      return <option value={a.city} key={Math.random(0.5 * 21)}>{a.city}</option>
    })}
  </Main__form_grid_select>
}

SelectionItem.propTypes = {
  result: PropTypes.array
}

const Main__form_grid_select = styled.select`
  height: 50%;
  @media screen and (max-width: 105vh) {
    height: 60%;
  }
  
`

export default SelectionItem;