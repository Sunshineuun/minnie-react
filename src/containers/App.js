/*
   Home 主页
*/
import React, {Component} from 'react';
import CustomSider from "../components/CustomSider";
import {Layout} from "antd";
import {Route, Switch} from "react-router-dom";
import Message from "./Message";
import CustomHeader from "../components/CustomHeader";
import Calendars from "../components/header/Calendars";
import NoMatch from "./404";
import moment from 'moment';
import 'moment/locale/zh-cn';
import UploadEditor from "../components/upload/UploadEditor";
import {matchPath} from 'react-router'
import FileList from "./FileList";

moment.locale('zh-cn');

const match = matchPath('/users/123', {
  path: '/users/:id',
  exact: true,
  strict: false
});

const {Content, Footer} = Layout;

export default class App extends Component {
  state = {
    collapsed: localStorage.getItem("mspa_SiderCollapsed") === "true",
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    }, function () {
      localStorage.setItem("mspa_SiderCollapsed", this.state.collapsed);
    });
  };

  render() {
    const {collapsed} = this.state;
    const {location} = this.props;
    console.log(location);
    console.log(this.props);

    let name = 'qiushengming';

    return (
      <Layout className="ant-layout-has-sider" style={{height: '100%'}}>
        <CustomSider collapsed={collapsed}/>
        <Layout>
          <CustomHeader collapsed={collapsed} toggle={this.toggle} username={name}/>
          <Content style={{margin: '0 16px'}}>
            <Switch>
              <Route exact path={'/'} component={Message}/>
              <Route exact path={'/app'} component={Message}/>
              <Route exact path={'/app/test1'} component={Calendars}/>
              <Route exact path={'/app/upload'} component={UploadEditor}/>
              <Route exact path={'/app/fileList'} component={FileList}/>
              <Route component={NoMatch}/>
            </Switch>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            MSPA ©2017-2018 Created by MinnieSoft
          </Footer>
        </Layout>
      </Layout>
    );
  }
}