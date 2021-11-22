import React, { useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks'
import Burger from '../../components/Burger/Burger'
import { motion } from 'framer-motion'
// import { Searchbar, UserNav } from '../../components/common'
//import { Logo, Container } from '../../components/ui'
import styles from './MobileNav.module.css'

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const StyledMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  @media (max-width: 900px) {
    width: 100%
  }


interface Link {
  href: string
  label: string
}
`
const NavLink = styled(motion.li)`
  font-weight: 400;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom-width: 1px;
  border-color: grey;
`

const links = [
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
    name: 'Page4',
    url: '/',
  },
  {
    name: 'Page5',
    url: '/',
  },
//   {
//     name: 'Page',
//     url: '/',
//   },
 ]

export type Props = {
  open: boolean

  setOpen: (v: boolean) => void
}

const Menu = (props: Props) => {
  const node = useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => props.setOpen(false))

  return (
    <>
      <div ref={node}>
        <StyledMenu open={props.open} className={styles.menu}>
          <div className={styles.menu}>
            <div className={styles.menuLi}>
            <div className="flex pb-4 lg:px-6 lg:hidden">
              
            </div>
            {[...links].map((page) => (
              <span key={page.url}>
                <NavLink>
                  <Link href={page.url!}>
                    <a
                      onClick={() => props.setOpen(false)}
                      className={styles.link}
                    >
                      {page.name}
                    </a>
                  </Link>
                </NavLink>
              </span>
            ))}
          </div>
          </div>
        </StyledMenu>

        <Burger open={props.open} setOpen={props.setOpen} />
      </div>
    </>
  )
}

export default Menu
