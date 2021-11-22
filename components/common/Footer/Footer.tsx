import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '../../../framework/commerce/types/page'
import getSlug from '../../../lib/get-slug'

import { Logo, Container } from '../../../components/ui'

import s from './Footer.module.css'
import {Grid, Row, Col,} from 'react-styled-flexboxgrid'
import styled from 'styled-components'
import styles from '../Layout/Layout.module.css'

const Wrapper = styled.div`

`

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const links = [
  {
    name: 'Home',
    url: '/',
  },
]


const links1 = [
  {
    name: 'Page1',
    url: '/',
  },
  {
    name: 'Page2',
    url: '/',
  },
  {
    name: 'Page3',
    url: '/',
  },
  {
    name: 'Page4',
    url: '/',
  },
  {
    name: 'Page5',
    url: '/',
  },
  // {
  //   name: 'Consumer Mobile App',
  //   url: '/',
  // },
]
const links2 = [
  {
    name: 'Page6',
    url: '/',
  },
  {
    name: 'page7',
    url: '/',
  },
  {
    name: 'Page8',
    url: '/',
  },
  {
    name: 'Page9',
    url: '/',
  },
  {
    name: 'Page10',
    url: '/',
  },
]
const links3 = [
  {
    name: 'Page11',
    url: '/',
  },
  {
    name: 'Page12',
    url: '/',
  },

]
const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages } = usePages(pages)
  const rootClassName = cn(s.root, className)

  return (
    <footer className={rootClassName}>
      <Container>
      <div className="max-w-screen-xl pt-10 border-b border-accent-2">
            <Wrapper>
              <Row className="border-b border-accent-2">
                <Col xs={6} sm={4} md={4} lg={4}>
                    <h4 className="text-sm font-semibold">Link Name</h4>
                    <ul className="pt-3 pb-10 space-y-2 text-accent-6 text-sm hover:text-accent-6">
                    <div className="grid md:grid-rows-6 md:grid-flow-col">
              {[...links1 ].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
                    </ul>
                </Col>
                <Col xs={6} sm={4} md={4} lg={4}>
                    <h4 className="text-sm font-semibold">Link Name 2</h4>
                    <ul className="pt-3 pb-10 space-y-2 text-accent-6 text-sm">
                    <div className="grid md:grid-rows-6 md:grid md:grid-flow-col">
              {[...links2 ].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
                    </ul>
                </Col>
                <Col xs={6} sm={4} md={4} lg={4}>
                    <h4 className="text-sm font-semibold">Link Name 3</h4>
                    <ul className="pt-3 pb-10 space-y-2 text-accent-6 text-sm">
                    <div className="grid md:grid-rows-4 md:grid-cols-3 md:grid-flow-col">
              {[...links3 ].map((page) => (
                <span key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-accent-9 hover:text-accent-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
               
                    </ul>
                </Col>
                
              </Row>
              <div className="pt-5 pb-5 flex flex-col  space-y-4 text-accent-6 text-sm text-center">
          <div>
            <span>&copy;{new Date().getFullYear()} WebsiteName, Inc. All rights reserved.</span>
          </div>
        </div>
            </Wrapper>
            </div>
            </Container>
    </footer>
    
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)
      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return
      sitePages.push(page)
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
  }
}

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
