import React from 'react';

export default function Home(props) {
  console.log('props.match:', props.match);

  return (
    <div className="Home">
      from Home component
    </div>
  );
};
