import React from 'react'
import { Menu, Skeleton } from 'antd'
import {
  HeartTwoTone,
  SearchOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import styles from './home.less'

class Home extends React.Component {
  constructor(props) {
    super(props)
    const { title } = props
    this.state = {
      title,
      current: '',
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
      <div className={'home-header'}>
        <div className={'content'}>
          <div className={'title'}>
            <Link href="/">
              <span className="sys-name">包崽无限公司</span>
            </Link>
          </div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <HeartTwoTone twoToneColor="#e9819b" />
              <Link href="/blog/blog">
                <a>Blog</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="bbb">
              <HeartTwoTone twoToneColor="#e9819b" />
              <Link href="/cat/cat">
                <a>Cat</a>
              </Link>
            </Menu.Item>

            <Menu.Item key="ccc">
              <HeartTwoTone twoToneColor="#e9819b" />
              <Link href="/life/life">
                <a>Life</a>
              </Link>
            </Menu.Item>
          </Menu>
          <Skeleton active />
        </div>
      </div>
    )
  }
}

export default Home
