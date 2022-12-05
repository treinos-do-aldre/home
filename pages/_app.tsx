import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalProvider } from 'context/GlobalContext'
import Header from '@components/layout/header'
import DevBtn from '@components/layout/dev_btn'
import { environment } from '@environment'

function MyApp({ Component, pageProps }: AppProps) {
  const enableDev = environment.enable_dev_options;
  
  return (
    <GlobalProvider>
      {/* <Header/> */}
      <Component {...pageProps} />

    {enableDev && <DevBtn/>}
    </GlobalProvider>
  )
}

export default MyApp
