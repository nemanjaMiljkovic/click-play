import React from 'react';
import Input from '../Input';
import List from '../List';

export default function () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <Input />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <List className="media">
            <div className="media-left">
              <img className="media-object" src="..." alt="..." />
            </div>
            <div className="media-body">
              <h4 className="media-heading">Media heading</h4>
            </div>
          </List>
        </div>
      </div>
    </div>
  );
}
