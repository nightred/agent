
import React from 'react';
import Axios from 'axios';

import SideMenu from '../components/sidemenu.component';
import Footer from '../components/footer.component';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true
    }
  }

  render() {
    return (
      <div className="agent">
        <SideMenu />
        <Footer />
      </div>
    );
  }
}

export default AppContainer
