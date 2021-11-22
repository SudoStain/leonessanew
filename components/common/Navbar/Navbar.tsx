import { FC, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '../../../components/ui'

import Image from 'next/image'
import styled from 'styled-components'
import Menu from '../../../components/Menu/Menu'


const LogoDiv = styled.div`
padding-top 5px;
  z-index: 99;

  @media (max-width: 950px) {
    display: none;
  }
`

interface Link {
  href: string
  label: string
}
interface NavbarProps {
  links?: Link[]
}

const links3 = [
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
    name: 'page3',
    url: '/',
  },
  {
    name: 'page4',
    url: '/',
  },
  {
    name: 'page5',
    url: '/',
  },
  // {
  //   name: 'Contact',
  //   url: '/',
  // },
]

const Navbar: FC<NavbarProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <NavbarRoot>
      <Container>
        <Menu open={open} setOpen={setOpen}></Menu>
        <div className={s.nav}>
          <div className="flex items-center">
            <LogoDiv>
              <Link href="/">
                <a>
                  <div className="logo">
                    <Image
                      width={106}
                      height={27}
                      src="/logo.png"
                      alt="brand"
                    />
                  </div>
                </a>
              </Link>
            </LogoDiv>

            <nav className={s.navMenu}>
              {[...links3].map((page) => (
                <span key={page.url}>
                  <Link href={page.url!}>
                    <a className={s.link}>{page.name}</a>
                  </Link>
                </span>
              ))}

              {/* <Link href="/webstore">
              <a className={s.link}>Webstore</a>
            </Link>
            {links?.map((l) => (
              <Link href={l.href} key={l.href}>
                <a className={s.link}>{l.label}</a>
              </Link>
            ))} */}
            </nav>
          </div>

          {/* <div className="flex items-center justify-end flex-1 space-x-8 mr-5">
            <UserNav />
          </div> */}
          <div className="flex items-center justify-end flex-2"></div>
        </div>
      </Container>
    </NavbarRoot>
  )
}
export default Navbar
