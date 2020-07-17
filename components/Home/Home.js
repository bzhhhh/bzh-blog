import React from 'react'
import { Menu, Skeleton, Card } from 'antd'
import {
  SnippetsTwoTone,
  HeartTwoTone,
  HomeTwoTone,
} from '@ant-design/icons'
import Link from 'next/link'
import Router from 'next/router'
import styles from './home.less'


const { Meta } = Card
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
    Router.push(e.key)
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
          {/* <Skeleton active /> */}
          <div className={'article'}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img src="/images/bg-1.jpg" />}
            >
              <Meta title="富士山下" description="who says you are not worth it" />
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
