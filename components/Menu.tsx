import Link from 'next/link'
import React, { useState } from 'react'
import arrowUp from '../images/icon-arrow-up.svg'
import arrowDown from '../images/icon-arrow-down.svg'
type propTypes = {
  title: string
  subMenu?: {
    title: string
    imgUrl?: string
  }[]
}

const Menu = ({ title, subMenu }: propTypes) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className="list-none lg:relative">
      {subMenu && (
        <button
          className="flex items-center lg:relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <img
            className="ml-2"
            alt=""
            src={`${isOpen ? arrowUp.src : arrowDown.src}`}
          />
        </button>
      )}
      {isOpen && (
        <ul className="flex max-w-sm flex-col gap-4 rounded-md p-4 lg:absolute lg:right-0 lg:w-32 lg:bg-white lg:shadow-[0_4px_8px_4px_rgba(0,0,0,0.3)]">
          {subMenu?.map((link) => (
            <Link key={link.title} href="#">
              <a className="flex items-center">
                {link.imgUrl && <img className="mr-2" src={link.imgUrl} />}
                {link.title}
              </a>
            </Link>
          ))}
        </ul>
      )}
      {!subMenu && (
        <Link href="#">
          <a>{title}</a>
        </Link>
      )}
    </li>
  )
}

export default Menu
