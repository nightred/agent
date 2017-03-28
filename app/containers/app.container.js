
import React from 'react';
import Axios from 'axios';

import TopBar from '../components/topbar.component';
import MenuItem from '../components/menuitem.component';
import Welcome from '../components/welcome.component';

class AppContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        { id:1, label: 'Welcome', address: '/' },
        { id:2, label: 'Test', address: '/test' }
      ],
    };
  }

  handleMenuClick(item, event) {
    event.preventDefault();
    console.log(item);
  }

  render() {
    var _this = this;

    return (
      <div>
        <div className='topbar'>
          <TopBar />
        </div>
        <nav>
          <ul>
            {this.state.menuList.map( function(item) {
              return (
                <MenuItem
                  key={item.id}
                  onlyActiveOnIndex={true}
                  to={item.address}>{item.label}</ MenuItem>
              );
            })}
          </ul>
        </nav>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppContainer
