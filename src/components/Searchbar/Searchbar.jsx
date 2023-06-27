import {
  StyledHeader,
  StyledSearchForm,
  StyledSearchFormButton,
  StyledSearchFormButtonLabel,
  StyledSearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledHeader>
      <StyledSearchForm>
        <StyledSearchFormButton type="submit">
          <StyledSearchFormButtonLabel>Search</StyledSearchFormButtonLabel>
        </StyledSearchFormButton>

        <StyledSearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledSearchForm>
    </StyledHeader>
  );
};
