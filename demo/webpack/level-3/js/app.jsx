/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */

require('./common.css');
require('./app.scss');

const React    = require('react');
const ReactDOM = require('react-dom');

class Hello extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.name}!</h1>
        );
    }
}

ReactDOM.render(<Hello name="World" />, document.getElementById('container'));