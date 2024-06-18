import React from 'react';
import ControlsBtn from './ControlsBtn';
import Notification from './Notification';
import './CounterItems.css';

// Функції для підрахунку всередині файлу
const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

const countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return total ? Math.round((good / total) * 100) : 0;
};

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    feedbackGiven: false, // новий стан для визначення, чи є відгуки
  };

  handleFeedback = (type) => {
    if (type === 'clear') {
      this.setState({
        good: 0,
        neutral: 0,
        bad: 0,
        feedbackGiven: false, // при очищенні встановити в false
      });
    } else {
      this.setState((prevState) => ({
        [type]: prevState[type] + 1,
        feedbackGiven: true, // встановити в true при будь-якому відгуку
      }));
    }
  };

  render() {
    const { good, neutral, bad, feedbackGiven } = this.state;
    const totalFeedback = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(this.state);

    return (
      <div className='Feedback'>
        <h1>Залиште ваш відгук</h1>
        <div className='Feedback__controls'>
          <ControlsBtn handleFeedback={this.handleFeedback} />
        </div>
        <div className='Feedback__statistics'>
          <h2>Статистика</h2>
          {feedbackGiven ? (
            <div className="Stats__menu">
              <p>Добре: <span>{good}</span></p>
              <p>Нейтрально: <span>{neutral}</span></p>
              <p>Погано: <span>{bad}</span></p>
              <p>Всього: <span>{totalFeedback}</span></p>
              <p>Позитивні відгуки: <span>{positivePercentage}%</span></p>
            </div>
          ) : (
            <Notification message="Немає відгуків" />
          )}
        </div>
      </div>
    );
  }
}

export default Counter;
