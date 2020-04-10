import Layout from '../components/Layout'
import { RoleType } from '../constants/ConstTypes'


const UserList = () => (
  <Layout>
    <h3>user1:bzh</h3>
    <span>{RoleType[1]}</span>
    <style jsx>
      {
        `
      h3 {
        color: #94e0fb;
      }
      `
      }
    </style>
  </Layout>

)

export default UserList