import { Component } from 'react';
import { StyledImg, StyledLi } from './ImageGalleryIem.styled';
import { Modal } from 'components/Modal/Modal';

export class GalleryImageItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item;
    return (
      <StyledLi>
        <StyledImg src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal ? <Modal src={largeImageURL} alt={tags} /> : null}
      </StyledLi>
    );
  }
}
