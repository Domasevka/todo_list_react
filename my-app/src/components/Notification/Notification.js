import React from 'react';
import './style.scss';

const Notification = ({message, onRemove, notification}) => (
    <div className="notification">
      <span>{message}</span>
      <button type="button" className="btn-close" onClick={onRemove}>&times;</button>
    </div>
);

export default Notification
