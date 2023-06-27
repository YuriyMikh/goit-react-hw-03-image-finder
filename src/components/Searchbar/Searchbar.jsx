import { Component } from 'react';
import {
  StyledHeader,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeQuery = event => {
    console.log(event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.inputValue);
  };

  render() {
    return (
      <StyledHeader>
        <StyledSearchForm omnSubmit={this.handleSubmit}>
          <StyledSearchFormButton type="submit">
            <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
          </StyledSearchFormButton>

          <StyledSearchFormInput
            type="text"
            onChange={this.handleChangeQuery}
            value={this.inputValue}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </StyledSearchForm>
      </StyledHeader>
    );
  }
}
