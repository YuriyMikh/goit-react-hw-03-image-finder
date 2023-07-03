import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledImg, StyledLi } from './ImageGalleryIem.styled';
import { Modal } from 'components/Modal/Modal';

export class GalleryImageItem extends Component {
  //в классовом компоненте пропсы проверяются через static, записываются сразу после объявления класса, а не под классом (как в функциональных компонентах)
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

    state = {
    showModal: false,
  };

  //функция переключатель
  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal })); //при клике на маленькое изображение меняем ключ showModal на true, чтобы оторбразилось фото в модалке
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.item; //получаем объект item, деструктуризируем свойства объекта

    return (
      <StyledLi>
        <StyledImg src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {this.state.showModal ? (
          <Modal src={largeImageURL} alt={tags} onClose={this.toggleModal} />
        ) : null}
      </StyledLi>
    );
  }
}