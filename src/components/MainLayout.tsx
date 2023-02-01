import { useState } from 'react';

import { Layout, Menu, Dropdown, Space, message } from "antd";
import type { MenuProps } from 'antd';
import { Content } from 'antd/es/layout/layout';

import { AiFillSetting, AiOutlineMenuFold, AiOutlineMenuUnfold, AiOutlineDashboard, AiOutlineLogout } from 'react-icons/ai';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate, Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';


interface Props {

};

const items = [
    {
        key: 'logout',
        icon: '',
        label: 'Logout'
    },
];

const menu_sider = [
    {
        key: '',
        icon: <i className="fa-solid fa-gauge-high"></i>,
        label: 'Dashboard'
    },
    {
        key: 'catelog',
        icon: <i className="fa-solid fa-book"></i>,
        label: 'Catelog',
        children: [
            {
                key: 'products',
                icon: <i className="far fa-dot-circle"></i>,
                label: 'Products'
            },
            {
                key: 'product-reviews',
                icon: <i className="far fa-dot-circle"></i>,
                label: 'Product reviews'
            },
            {
                key: 'product-tags',
                icon: <i className="far fa-dot-circle"></i>,
                label: 'Product tags'
            },
            {
                key: 'categories',
                icon: <i className="far fa-dot-circle"></i>,
                label: 'Categories'
            },
        ]
    },
    {
        key: 'orders',
        icon: <i className="fa-brands fa-first-order"></i>,
        label: 'Orders'
    },
    {
        key: 'blogs',
        icon: <i className="fa-solid fa-blog"></i>,
        label: 'Blogs',
    }
];

const MainLayout: React.FC<Props> = ({

}) => {

    const { Sider, Header } = Layout;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate();

    const onClick: MenuProps['onClick'] = ({ key }) => {
        navigate(`/`);
    };

    return (
        <Layout className='text-[30px]'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="bg-[#101a40] px-4  text-size-2 border-b border-solid border-[#4b545c] h-[64px] flex items-center justify-center">
                    <NavLink to="/admin" >
                        <p className="text-white text-title font-bold text-center">ADI</p>
                    </NavLink>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    className="text-size-2 min-h-[690px]"
                    style={{ color: '' }}
                    defaultSelectedKeys={['']}
                    items={menu_sider}
                    onClick={({ key }) => {
                        if (key === 'logout') {

                        } else {
                            navigate(`/admin/${key}`);
                        }
                    }}
                >
                </Menu>
            </Sider>
            <Layout>
                <Header className="flex items-center justify-between text-size-2">
                    <div className="text-white">
                        <button className='p-1 text-gray-300 hover:text-white' onClick={() => setCollapsed(e => !e)}>
                            {collapsed
                                ? <AiOutlineMenuFold />
                                : <AiOutlineMenuUnfold />
                            }
                        </button>
                    </div>
                    <div className="flex items-center gap-4 text-white">
                        <p>Admin</p>
                        <span>
                            <IoIosNotifications />
                        </span>
                        <Dropdown
                            menu={{ items, onClick }}
                            placement="bottomRight"
                        >
                            <button>
                                <Space>
                                    <AiFillSetting />
                                </Space>
                            </button>
                        </Dropdown>
                    </div>
                </Header>
                <Content
                className="text-size-4"
                    style={{
                        padding: 18,
                        minHeight: 280,
                        backgroundColor: '#EAEEF3',
                        // fontSize: '18px'
                    }}>
                        
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;