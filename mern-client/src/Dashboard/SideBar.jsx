
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards, HiOutlineCloudUpload } from 'react-icons/hi';
import img from '../../src/assets/profile.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
//import MobileDashboard from './MobileDashboard';

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className='pt-20'>
      <Sidebar aria-label="Sidebar with content separator example" className='hidden md:block'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/user/dashboard"
              icon={HiChartPie}>
              <p>
                Dashboard
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/user/dashboard/upload"
              icon={HiOutlineCloudUpload}
            >
              <p>
                Upload Book
              </p>
            </Sidebar.Item>

            <Sidebar.Item
              href="/user/dashboard/manage"
              icon={HiInbox}
            >
              <p>
                ManageBooks
              </p>
            </Sidebar.Item>
            <Sidebar.Item
              href="/logout"
              icon={HiTable}
            >
              <p>
                Log out
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  )
}

export default SideBar