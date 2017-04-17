
import React from 'react';

class IfConfig extends React.Component {

  render() {

    return (
      <div>
        <table>
          <tbody>
            <tr><th colSpan='3'>{this.props.name}</th></tr>
            <tr>
              <td> Type: {this.props.family} </td>
              <td> Address: {this.props.address} </td>
              <td> MAC: {this.props.mac} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IfConfig
