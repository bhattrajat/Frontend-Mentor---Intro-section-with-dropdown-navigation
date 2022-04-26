import React, { useRef, useState } from 'react'
import menuImg from '../images/icon-menu.svg'
import closeMenuImg from '../images/icon-close-menu.svg'
import Link from 'next/link'

import Menu from './Menu'
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
    imgUrl?: string
  }[]
}[]
const primaryMenuItems: MenuItems = [
  {
    title: 'Features',
    subMenu: [
      { title: 'Todo List', imgUrl: '/images/icon-todo.svg' },
      { title: 'Calendar', imgUrl: '/images/icon-calendar.svg' },
      { title: 'Reminders', imgUrl: '/images/icon-reminders.svg' },
      { title: 'Planning', imgUrl: '/images/icon-planning.svg' },
    ],
  },
  {
    title: 'Company',
    subMenu: [{ title: 'History' }, { title: 'Our Team' }, { title: 'blog' }],
  },
  {
    title: 'Careers',
  },
  {
    title: 'About',
  },
]

const secondaryMenuItems = [
  { title: 'login' },
  { title: 'register', classNames: 'border-2 border-black' },
]
const NavBarCustom = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const outSideClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (menuRef.current) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
  }
  return (
    <nav className="flex items-center justify-between gap-x-4 p-4 lg:justify-start">
      <h2 className="text-xl font-bold">snap</h2>

      <div className="flex items-center justify-between lg:flex-grow">
        <div className="hidden items-center gap-x-12 lg:ml-5 lg:flex">
          {primaryMenuItems.map((item) => {
            if (item.subMenu) {
              return (
                <Menu
                  key={item.title}
                  title={item.title}
                  subMenu={item.subMenu}
                />
              )
            }
            return (
              <Link href="#" key={item.title}>
                <a>{item.title}</a>
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
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open menu</span>
            <img src={`${isOpen ? closeMenuImg.src : menuImg.src}`} />
          </button>

          <div
            className={
              'fixed inset-0 flex justify-end bg-gray-700 bg-opacity-70 transition-transform ' +
              (isOpen ? '-translate-x-0' : 'translate-x-full')
            }
            onClick={(e) => outSideClickHandler(e)}
          >
            <div
              className="flex h-full w-3/5 flex-col bg-white p-4"
              ref={menuRef}
            >
              <button className="self-end" onClick={() => setIsOpen(!isOpen)}>
                <span className="sr-only">Close Menu</span>
                <img src={closeMenuImg.src} />
              </button>
              <ul className="flex flex-col gap-4">
                {primaryMenuItems.map((item) => {
                  return (
                    <Menu
                      key={item.title}
                      title={item.title}
                      subMenu={item.subMenu}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBarCustom
