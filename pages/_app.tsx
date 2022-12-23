import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../Component/Common/Header/Navbar'
import Footer from '../Component/Common/Footer/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return<>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </> 
}
