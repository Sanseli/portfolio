import Head from 'next/head';
import SideNav from '@/components/SideNav/SideNav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='h-full'>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Lisa Sansen</title>
      </Head>
      <div className='flex flex-col lg:flex-row lg:h-full space-y-20 lg:space-y-0 lg:space-x-20 py-10 lg:p-20 w-fit'>
        <SideNav />
        <Component {...pageProps} />
      </div>
    </div>

  )
}
