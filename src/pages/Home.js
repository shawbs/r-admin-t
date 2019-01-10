import React from 'react';
import { observer, inject } from "mobx-react";
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import { Route } from 'react-router-dom';
import Welcome from './child/Welcome';
import Main from './child/Main';

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

@inject('baseStore','userStore')
@observer
class Home extends React.Component {
  constructor(props){
    super(props)
    this.userStore = props.userStore
    this.state = {
      collapsed: false,
    }
  }

  componentDidMount(){
    console.log(this)
    this.userStore.getUserData().then(res=>{
      console.log(this.userStore)
      console.log(res)
    },err=>{
      console.log(err)
    })
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
          <Menu theme="dark" mode="inline">
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
            <div>
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
                margin: '24px 0', padding: 24, background: '#fff', minHeight: 280,
              }}
              >
                <Route exact path="/home"  component = {Welcome}/>
                <Route exact path="/home/main"  component = {Main}/>
              </Content>
            </div>
        </Layout>

      </Layout>
    );
  }
}

export default Home
