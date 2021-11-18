import { Component } from 'react';

import fetchGallery from '../../apiService/apiService';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';
import ImagesPendingView from './ImagesPendingView';
import ImageIdleView from './ImagesIdleView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: [],
    status: Status.IDLE,
    page: 1,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      fetchGallery(nextQuery)
        .then(images => {
          if (images.hits.length === 0) {
            throw Error();
          }
          this.setState({ images: images.hits, status: Status.RESOLVED });
        })
        .catch(error => this.setState({ status: Status.REJECTED }));
    }
  }

  render() {
    const { images, status } = this.state;
    // const { query } = this.props;

    if (status === Status.IDLE) {
      return <ImageIdleView />;
    }

    if (status === Status.PENDING) {
      return <ImagesPendingView />;
    }

    if (status === Status.REJECTED) {
      return <ImagesErrorView message={'Ничего не получилось'} />;
    }

    if (status === Status.RESOLVED) {
      return <ImagesDataView images={images} />;
    }
  }
}

export default ImageGallery;
