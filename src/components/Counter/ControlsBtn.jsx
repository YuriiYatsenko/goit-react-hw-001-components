import React from 'react';

const ControlsBtn = ({ handleFeedback }) => (
  <div>
    <button onClick={() => handleFeedback('good')}>Добре</button>
    <button onClick={() => handleFeedback('neutral')}>Нейтрально</button>
    <button onClick={() => handleFeedback('bad')}>Погано</button>
    <button onClick={() => handleFeedback('clear')}>Очистити</button>
  </div>
);

export default ControlsBtn;
