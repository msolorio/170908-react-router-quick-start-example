import React from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';

export default function Topics(props) {

  return (
      <div className="Topics">
        <Route exact path={props.match.url} render={() => (
          <p>Please select a topic and commence the learning</p>
        )} />
        
        <ul>
          <li><Link to={`${props.match.url}/dinosuars`}>Dinosaurs</Link></li>
          <li><Link to={`${props.match.url}/fauna`}>Fauna</Link></li>
          <li><Link to={`${props.match.url}/flora`}>Flora</Link></li>
        </ul>

        <Route path={`${props.match.url}/:topicId`} component={Topic} />

      </div>
  );
};
