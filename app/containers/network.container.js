
import React from 'react';
import Axios from 'axios';

import Network from '../components/network.component';
import IfConfig from '../components/ifconfig.component';

class NetworkContainer extends React.Component {

  render() {

    var os = require('os');
    var ifaces = os.networkInterfaces();
console.log('test: ' + require('os').networkInterfaces());
console.log(require('os').networkInterfaces());
    return (
      <div>
        <Network />
        {Object.keys(ifaces).map( function(ifname) {
          console.log('test ' + ifname);
          ifaces[ifname].forEach( function(iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
              return;
            }
            return (
              <IfConfig
                name={ifname}
                address={iface.address}
                mac={iface.mac}
                family={iface.family}/>
            );
          });
        })}
        <IfConfig />
      </div>
    );
  }
}

export default NetworkContainer
