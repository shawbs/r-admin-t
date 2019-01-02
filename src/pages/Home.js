import React from 'react';
import { observer } from "mobx-react";
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';

const { Header, Sider, Content } = Layout;
const menu = (
<Menu>
  <Menu.Item >
    <Icon type="user" />
    <span>nav 1</span>
  </Menu.Item>
  <Menu.Item >
    <Icon type="video-camera" />
    <span>nav 2</span>
  </Menu.Item>
  <Menu.Item >
    <Icon type="upload" />
    <a href="#/login">exit</a>
  </Menu.Item>
</Menu>)

@observer
class Home extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      collapsed: false,
    }
  }

  componentDidMount(){
    console.log(this)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
            <Menu.SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="6">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
            <Header className="header" style={{ background: '#fff' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Dropdown overlay={menu}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </Dropdown>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home
