import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import HeroMobile from '../images/image-hero-mobile.png'
import HeroDesktop from '../images/image-hero-desktop.png'
import { ReactNode } from 'react'

const heroLinks = [
  {
    url: '/images/client-databiz.svg',
  },
  { url: '/images/client-audiophile.svg' },
  { url: '/images/client-meet.svg' },
  { url: '/images/client-maker.svg' },
]

type PropsType = {
  isProd: boolean
  children: ReactNode
}

const Home: NextPage<PropsType> = ({ isProd }) => {
  return (
    <>
      <Head>
        <title>Snap | Homepage</title>
      </Head>
      <div className="mt-4 flex flex-col lg:mx-auto lg:w-4/5 lg:flex-row lg:items-center lg:justify-between">
        <div className="order-1 mt-4 p-4 text-center lg:order-[0] lg:w-[39%] lg:text-left">
          <h1 className="text-3xl font-bold lg:text-6xl">Make remote work</h1>
          <p className="my-4">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="rounded-lg bg-black px-6 py-3 text-white">
            Learn More
          </button>
          <div className="mt-20 flex justify-between">
            {heroLinks.map((img) => (
              <img
                key={img.url}
                alt=""
                className="w-20 object-scale-down lg:mr-4"
                src={img.url}
              />
            ))}
          </div>
        </div>
        <picture className="lg:h-[480px]">
          <source media="(min-width: 640px)" srcSet={HeroDesktop.src} />
          <img className="h-full w-full object-contain" src={HeroMobile.src} />
        </picture>
      </div>
    </>
  )
}

export default Home
