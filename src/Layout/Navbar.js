import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import "./NavBar.css";

const { Header } = Layout;

const MenuItemGroup = Menu.ItemGroup;

class NavBar extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="header-layout">
        <Header>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            theme="light"
          >
            <Menu.Item key="home">
              <Link to="">
                <Icon type="profile" />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="publications">
              <Link to="/publications">
                <Icon type="file-done" />
                Publications
              </Link>
            </Menu.Item>
            <Menu.Item key="teaching">
              <Link to="/teaching">
                <Icon type="read" />
                Teaching
              </Link>
            </Menu.Item>
            <Menu.Item key="personal">
              <Link to="/personal">
                <Icon type="user" />
                Personal
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}
export default NavBar;
