import { Component } from 'react';
import {
  StyledHeader,
  StyledSearchForm,
  StyledButton,
  StyledButtonLabel,
  StyledInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChangeValue = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <StyledHeader>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit">
            <StyledButtonLabel />
          </StyledButton>

          <StyledInput
            type="text"
            onChange={this.handleChangeValue}
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
