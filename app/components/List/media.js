import React, { PropTypes } from 'react';

export default function Media(props) {
  return (
    <div className="media">
      {props.children}
    </div>
  );
}

Media.propTypes = {
  children: PropTypes.element.isRequired,
};
