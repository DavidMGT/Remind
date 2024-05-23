import Link from 'next/link'
import MobileMenu from './mobile-menu'
import {  CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space ,Image} from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link href="/signin" className="block" aria-label="Cruip">Sign in</Link>
    ),
  },
  {
    key: '4',
    label:  (
      <Link href="/signup" className="block" aria-label="Cruip">Sign Out</Link>
    ),
  },
]
export default function Header() {
  return (
    <header className="absolute w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  ">
        <div className="flex items-center h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/"  aria-label="Cruip">
            <Image src='https://www.hanglok-tech.cn/Template/Home/img/logo.png' width={150}/>
            </Link>
          </div>
          <Dropdown menu={{ items }} className='px-6'>
      
       <Space>
        Peripheral device
        <CaretDownOutlined />
      </Space>

  </Dropdown>
  <Dropdown menu={{ items }}  className='px-6'>
       <a >
       <Space>
        Algorithm
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
  <Dropdown menu={{ items }} className='px-6'>
       <a >
       <Space>
        SDK
        <CaretDownOutlined />
      </Space>
    </a>
  </Dropdown>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in gitlinks */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
