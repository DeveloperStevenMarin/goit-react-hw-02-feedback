import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Norification/Notification';
export const App = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const handleFeedback = type => {
    if (type === 'good') {
      setGoodCount(goodCount + 1);
    } else if (type === 'neutral') {
      setNeutralCount(neutralCount + 1);
    } else if (type === 'bad') {
      setBadCount(badCount + 1);
    }
  };
  const countTotalFeedback = () => {
    return goodCount + neutralCount + badCount;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (goodCount / totalFeedback) * 100;
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={goodCount}
            neutral={neutralCount}
            bad={badCount}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
        </Section>
      </div>
    </div>
  );
};
