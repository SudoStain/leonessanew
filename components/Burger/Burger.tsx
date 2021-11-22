import React from 'react'
import { StyledBurger } from './Burger.styled'
import styles from './MobileNav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  padding-left: 0px;
  padding-right: 0px;
`

const LogoContainer = styled.div`
  z-index: 1;
  margin-top: 11px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;



  @media (min-width: 950px) {
    display: none;
  }
`

export type Props = {
  open: boolean
  setOpen: Function
}

const Burger = (props: Props) => {
  return (
    <MenuContainer>
      <StyledBurger
        open={props.open}
        onClick={() => props.setOpen(!props.open)}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <LogoContainer>
        <Link href="/">
          <a onClick={() => props.setOpen(false)}>
          
              <Image width={106} height={27} src="/logo.png" alt="brand" />
           
          </a>
        </Link>
      </LogoContainer>
    </MenuContainer>
  )
}

export default Burger
