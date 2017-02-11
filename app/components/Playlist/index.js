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
          <List className="list-group">
            <li className="list-group-item">Pesma</li>
            <li className="list-group-item">Pesma</li>
            <li className="list-group-item">Pesma</li>
          </List>
        </div>
      </div>
    </div>
  );
}
