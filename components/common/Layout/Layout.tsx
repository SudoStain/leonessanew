import cn from 'classnames'
import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { useUI } from '../../../components/ui/context'
import type { Page } from '../../../framework/commerce/types/page'
import { Navbar, Footer } from '../../../components/common'
import type { Category } from '../../../framework/commerce/types/site'

import { useAcceptCookies } from '../../../lib/hooks/useAcceptCookies'
import { Button, LoadingDots } from '../../../components/ui'



import s from './Layout.module.css'


const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: Loading,
}

const FeatureBar = dynamic(
  () => import('../../../components/common/FeatureBar'),
  dynamicProps
)

interface Props {
  pageProps: {
    pages?: Page[]
    // categories: Category[]
  }
}



const Layout: FC<Props> = ({
  children,
 
}) => {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies()
  const { locale = 'en-US' } = useRouter()
  // const navBarlinks = categories.slice(0, 2).map((c) => ({
  //   label: c.name,
  //   href: `/search/${c.slug}`,
  // }))


  return (
    
    <>
      <div className={cn(s.root)}>
     
      <Navbar />
      <main className="fit">{children}</main>
        <Footer  />

        <FeatureBar
          title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
          hide={acceptedCookies}
          action={
            <Button className="mx-5" onClick={() => onAcceptCookies()}>
              Accept cookies
            </Button>
          }
        />
      </div>
    </>
  )
}

export default Layout
