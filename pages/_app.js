import CartContextProvider from '@/components/CartContext'
import '../styles/global.css'
// import { createGlobalStyle } from 'styled-components'

/* const GlobalStyles = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing:border-box;
}
html,body{
    max-width: 100vw;
  overflow-x: hidden;
   background:repeating-radial-gradient(rgba(128, 128, 128, 0.355),rgba(255, 255, 255, 0.355),rgba(128, 128, 128, 0.355)) center/cover;
      cursor: url('../images/arrowfinal@2x.png'), auto;
  scroll-behavior: smooth;
}
body{
  font-family: 'Roboto', sans-serif;
  font-size: 100%;
 background: #222;
}

a {
  color: inherit;
  text-decoration: none;
}` */

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyles /> */}
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )
}
