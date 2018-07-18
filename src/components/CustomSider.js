import React, {Component} from 'react';
import {Layout, Menu, Icon} from 'antd';
import '../style/css/CustomSider.less';
import {Link} from "react-router-dom";

const {Sider} = Layout;

class CustomSider extends Component {
  constructor(props) {
    super(props);
    const {collapsed} = props;
    this.state = {
      collapsed: collapsed,
      firstHide: true, //第一次先隐藏暴露的子菜单
      selectedKey: '', //选择的路径
      openKey: '', //打开的路径（选择的上一层）
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const {collapsed, firstHide, openKey, selectedKey} = this.state;
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo" style={collapsed ? {backgroundSize: '70%'} : {backgroundSize: '30%'}}/>
        <Menu theme="dark" mode="inline"
              selectedKeys={[selectedKey]}
              onClick={this.menuClick}
              onOpenChange={this.openMenu}
              openKeys={firstHide ? null : [openKey]}
              defaultSelectedKeys={['1']}>
          <Menu.Item key={"/app"}>
            <Link to={"/app"}>
              <Icon type="home"/>
              <span>首页</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default CustomSider;