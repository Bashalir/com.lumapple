import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {PropTypes} from 'prop-types';

import Input from '../../atoms/input/Input';
import StyledSearchInput from './styles/StyledSearchInput';
import {SearchIcon} from './img/SearchIcon';

export default function SearchInput({setSearch, search}) {
  const {register, handleSubmit} = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const onSubmit = value => setSearch(search => ({...search, value}));
  const handleChange = e => {
    const {value} = e.target;
    setSearch(search => ({...search, value}));
  };

  return (
    <StyledSearchInput className="search_input">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Rechercher"
          inputRef={register}
          onChange={handleChange}
          type="search"
        >
          <SearchIcon />
        </Input>
      </form>
    </StyledSearchInput>
  );
}

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {
  search: PropTypes.object,
  setSearch: PropTypes.func,
};
