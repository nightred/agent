
import React from 'react';
import { Link } from 'react-router'

class MenuItem extends React.Component {

  render() {

    return (
      <li><Link {...this.props} activeClassName="active" /></li>
    );
  }
}


export default MenuItem
