import React from 'react';

import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = evt => dispatch(setFilter(evt.target.value));

  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChangeFilter(evt)}
        ></FilterInput>
      </FilterLabel>
    </FilterStyle>
  );
};
