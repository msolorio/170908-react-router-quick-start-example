import React from 'react';

export default function Topic({ match }) {
  console.log('match:', match);
  return (
    <div>Topic Name: {match.params.topicId}</div>
  );
};
