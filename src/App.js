import React, {Component} from 'react';
import './App.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
