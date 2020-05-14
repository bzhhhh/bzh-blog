import React from 'react'
import { Menu, Button, Input } from 'antd'
import {
  SnippetsTwoTone,
  HeartTwoTone,
  HomeTwoTone,
  SearchOutlined
} from '@ant-design/icons'
import Router from 'next/router'
import Link from 'next/link'

const { Search } = Input

class Header extends React.Component {
  constructor(props) {
    super(props)

    const { title } = props
    this.state = {
      title,
      current: '',
    }
  }

  handleClick = (e) => {
    Router.push(e.key)
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
            <Menu.Item key="/blog">
              <SnippetsTwoTone twoToneColor="#ccccff" />
              Blog
            </Menu.Item>

            <Menu.Item key="/cat">
              <HeartTwoTone twoToneColor="#ccccff" />
              Cat
            </Menu.Item>

            <Menu.Item key="/life">
              <HomeTwoTone twoToneColor="#ccccff" />
              Life
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
            }
            .logo-container {
              cursor: pointer;
            }
            .sys-name {
              display: inline-block;
              margin-left: 10px;
              font-size: 20px;
              color: #99cccc;
              font-weight: 500;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Header
