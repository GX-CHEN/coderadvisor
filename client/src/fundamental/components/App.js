import React from "react";
import { Menu, Layout } from "antd";
import {
  CoffeeOutlined,
  ChromeOutlined,
  SmileOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined
} from "@ant-design/icons";
import "./App.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Layout>
        <Header className="fundamental-header">
          <div className="header-logo">
            <QuestionCircleOutlined
              style={{ fontSize: 32, paddingRight: 10,  verticalAlign: "middle" }}
            />
            <ArrowRightOutlined style={{ fontSize: 22, verticalAlign: "middle" }} />
            <ArrowRightOutlined style={{ fontSize: 22, verticalAlign: "middle" }} />
            <SmileOutlined style={{ fontSize: 32, paddingLeft: 10, verticalAlign: "middle" }} />
          </div>
          <div className="header-content">Fundamental Coding Knowledge</div>
        </Header>
        <Layout>
          <Sider
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            width={256}
          >
            <Menu
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256, height: "100vh", paddingTop: 64 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <div className="menu-title">
                    <CoffeeOutlined style={{ fontSize: "18px" }} />
                    <span>Java Basics</span>
                  </div>
                }
              >
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <div className="menu-title">
                    <ChromeOutlined style={{ fontSize: "18px" }} />
                    <span>Web Dev Basics</span>
                  </div>
                }
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: 30, maxWidth: 1280, margin: "0 auto" }}>
            <Content
              className="site-layout-content"
              style={{
                padding: 24,
                margin: "64px 0 0",
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
