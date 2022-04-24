import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import menuImg from '../images/icon-menu.svg'
import closeMenuImg from '../images/icon-close-menu.svg'
import Link from 'next/link'
import arrowUp from '../images/icon-arrow-up.svg'
import arrowDown from '../images/icon-arrow-down.svg'

function MyLink(props: any) {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
type MenuItems = {
  title: string
  subMenu?: {
    title: string
    img?: string
  }[]
}[]
const primaryMenuItems: MenuItems = [
  {
    title: 'Features',
    subMenu: [
      { title: 'Todo List', img: '../images/icon-todo.svg' },
      { title: 'Calendar', img: '../images/icon-calendar.svg' },
      { title: 'Reminders', img: '../images/icon-reminders.svg' },
      { title: 'Planning', img: '../images/icon-planning.svg' },
    ],
  },
  {
    title: 'Careers',
  },
  {
    title: 'About',
  },
  {
    title: 'Company',
    subMenu: [{ title: 'History' }, { title: 'Our Team' }, { title: 'blog' }],
  },
]

const secondaryMenuItems = [
  { title: 'login' },
  { title: 'register', classNames: 'border-2 border-black' },
]
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between gap-x-4 p-4 lg:justify-start">
      <h2 className="text-xl font-bold">snap</h2>
      <div className="flex items-center justify-between lg:flex-grow">
        <div className="lg:flex">
          {primaryMenuItems.map((item) => {
            if (item.subMenu) {
              return (
                <Menu as="div" key={item.title} className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button className="mx-8 flex items-center">
                        {item.title}{' '}
                        <img
                          className="ml-2"
                          src={`${open ? arrowUp.src : arrowDown.src}`}
                        />
                      </Menu.Button>
                      <Menu.Items className="absolute right-0 w-36 rounded bg-white p-4 shadow-lg">
                        {item?.subMenu?.map((subItem) => {
                          return (
                            <Menu.Item key={subItem.title}>
                              {({ active }) => (
                                <Link href="/sublink">
                                  <a
                                    className={`my-2 flex items-center ${
                                      active && 'bg-blue-500'
                                    }`}
                                  >
                                    {subItem && (
                                      <img className="mr-2" src={subItem.img} />
                                    )}
                                    {subItem.title}
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          )
                        })}
                      </Menu.Items>
                    </>
                  )}
                </Menu>
              )
            }
            return (
              <Link href="#" key={item.title}>
                <a className="mx-8">{item.title}</a>
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex">
          {secondaryMenuItems.map((item) => {
            return (
              <Link href="#" key={item.title}>
                <a className={item.classNames + ' rounded-md px-4 py-2'}>
                  {item.title}
                </a>
              </Link>
            )
          })}
        </div>
        <div className="overflow-x-hidden lg:hidden">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open menu</span>
            <img src={`${isOpen ? closeMenuImg.src : menuImg.src}`} />
          </button>

          <div
            className={
              'fixed inset-0 flex justify-end bg-gray-700 bg-opacity-70 transition-transform ' +
              (isOpen ? '-translate-x-0' : 'translate-x-full')
            }
          >
            <div className="flex h-full w-3/5 flex-col bg-white p-4">
              <button className="self-end" onClick={() => setIsOpen(!isOpen)}>
                <img src={`${isOpen ? closeMenuImg.src : menuImg.src}`} />
              </button>

              {primaryMenuItems.map((item) => {
                if (item.subMenu) {
                  return (
                    <Menu as="div" key={item.title} className="lg:relative">
                      {({ open }) => (
                        <>
                          <Menu.Button className="mt-4 flex items-center lg:mx-8">
                            {item.title}{' '}
                            <img
                              className="ml-2"
                              src={`${open ? arrowUp.src : arrowDown.src}`}
                            />
                          </Menu.Button>
                          <Menu.Items className="rounded bg-white p-4 lg:absolute lg:right-0 lg:w-36 lg:shadow-lg">
                            {item?.subMenu?.map((subItem) => {
                              return (
                                <Menu.Item key={subItem.title}>
                                  {/* {({ active }) => ( */}
                                  {
                                    <Link href="/sublink">
                                      <a className={`my-2 flex items-center`}>
                                        {subItem.img && (
                                          <img
                                            className="mr-2"
                                            src={subItem.img}
                                          />
                                        )}
                                        {subItem.title}
                                      </a>
                                    </Link>
                                  }
                                  {/* )} */}
                                </Menu.Item>
                              )
                            })}
                          </Menu.Items>
                        </>
                      )}
                    </Menu>
                  )
                }
                return (
                  <Link href="#" key={item.title}>
                    <a className="mt-4 lg:mx-8">{item.title}</a>
                  </Link>
                )
              })}

              {primaryMenuItems.map((item) => {
                if (item.subMenu) {
                  return (
                    <Menu as="div" key={item.title} className="relative">
                      {({ open }) => (
                        <>
                          <Menu.Button className="mx-8 flex items-center">
                            {item.title}{' '}
                            <img
                              className="ml-2"
                              src={`${open ? arrowUp.src : arrowDown.src}`}
                            />
                          </Menu.Button>
                          <Menu.Items className="right-0 w-36 rounded bg-white p-4 shadow-lg">
                            {item?.subMenu?.map((subItem) => {
                              return (
                                <Menu.Item key={subItem.title}>
                                  {({ active }) => (
                                    <Link href="/sublink">
                                      <a
                                        className={`my-2 flex items-center ${
                                          active && 'bg-blue-500'
                                        }`}
                                      >
                                        {subItem && (
                                          <img
                                            className="mr-2"
                                            src={subItem.img}
                                          />
                                        )}
                                        {subItem.title}
                                      </a>
                                    </Link>
                                  )}
                                </Menu.Item>
                              )
                            })}
                          </Menu.Items>
                        </>
                      )}
                    </Menu>
                  )
                }
                return (
                  <Link href="#" key={item.title}>
                    <a className="mx-8">{item.title}</a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
