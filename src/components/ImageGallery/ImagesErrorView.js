import errorImage from './error.jpg';

function ImagesErrorView({ message }) {
  return (
    <div role="alert" className="error">
      <img src={errorImage} width="250" alt="error" />
      <p>{message}</p>
    </div>
  );
}

export default ImagesErrorView;
