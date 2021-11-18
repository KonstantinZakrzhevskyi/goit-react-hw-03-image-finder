import cameraRoll from './camera-roll.jpg';

function ImageIdleView() {
  return (
    <div role="alert" className="rollImage">
      <img src={cameraRoll} alt="cameraRoll" />
    </div>
  );
}

export default ImageIdleView;
