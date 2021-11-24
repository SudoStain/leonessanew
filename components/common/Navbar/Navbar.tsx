import { FC, useState } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import NavbarRoot from './NavbarRoot'
import { Container } from '../../../components/ui'
import {
  AppBar,
  createStyles,
  IconButton,
  LinearProgress,
  makeStyles,
  Menu,

  MenuItem,
} from "@material-ui/core";

import Image from 'next/image'
import styled from 'styled-components'
import MenuMenu from '../../../components/Menu/MenuMenu'
import { useUserContext } from "../../../contexts/UserContext";
import React from "react";

import AccountCircle from "@material-ui/icons/AccountCircle";

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
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const { user, logout } = useUserContext();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarRoot>
      <Container>
        <MenuMenu open={open} setOpen={setOpen}></MenuMenu>
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
        <AppBar  position="static">
        {user && (
          <>
            <IconButton
            
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </AppBar>
        
      </Container>
    </NavbarRoot>
  )
}
export default Navbar
