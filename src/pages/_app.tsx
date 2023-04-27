import SideNav from '@/components/SideNav/SideNav'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col md:flex-row h-full space-y-20 md:space-y-0 md:space-x-20 md:p-20'>
      <SideNav />
      <Component {...pageProps} />
    </div>
  )
}
