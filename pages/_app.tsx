import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import NavBar from '../components/NavBar'
import NavBarCustom from '../components/NavbarCustom'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <NavBar /> */}
      <NavBarCustom />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
