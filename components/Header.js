import React, { Component } from 'react'
import { Menu, Button, Input } from 'antd'
import {
  MailOutlined,
  SearchOutlined
} from '@ant-design/icons'
import Link from 'next/link'

const { Search } = Input

class Header extends React.Component {
  constructor(props) {
    super(props)

    const { title } = props
    this.state = {
      title,
      current: 'mail',
    }
  }
  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <div className="header">
        <div className="header-content">
          <Link href="/">
            <div className="logo-container">
              <span className="sys-name">包崽无限公司</span>
            </div>
          </Link>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <MailOutlined />
              AAA
            </Menu.Item>
            <Menu.Item key="bbb">
              <MailOutlined />
              BBB
            </Menu.Item>
            <Menu.Item key="ccc">
              <MailOutlined />
              CCC
            </Menu.Item>
          </Menu>
          <div className="search-content">
            <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
            {/* <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            /> */}
          </div>
        </div>
        <style jsx global>
          {`
            .header {
              width: 100%;
              height: 60px;
            }
            .header-content {
              position: relative;
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 66%;
              height: 100%;
              margin: 0 auto;
              // border: 1px dashed pink;
            }
            .sys-name {
              display: inline-block;
              margin-left: 10px;
              font-size: 20px;
              color: #e9819b;
              font-weight: 500;
            }
            // .logo {
            //   width: 30px;
            //   height: 30px;
            // }
          `}
        </style>
      </div>
    )
  }
}

export default Header
