import Link from 'next/link'
import styled, { css } from 'styled-components'
import Center from './Center'
import { useContext, useState } from 'react'
import BarsIcon from './icons/Bars'
import { CartContext } from './CartContext'

const StyledHeader = styled.header`
  background-color: rgb(34, 34, 34);
  padding: 0.5rem 1.5rem;
`
const Logo = styled(Link)`
  color: whitesmoke;
  position: relative;
  z-index: 3;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
`
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive &&
    css`
      display: block;
      background-color: black;
      margin: 0 auto;
      text-align: center;
      height: fit-content;
      transition: height 0.5s ease-out;
    `}
  ${(props) =>
    !props.mobileNavActive &&
    css`
      display: none;
    `}
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  gap: 15px;
  padding: 70px 20px 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  padding: 10px 0;
  text-transform: capitalize;
  line-height: 1.4;
  &:hover {
    color: rgba(255, 68, 0, 0.692);
    /* font-size: 110%; */
    transition: all 0.3s linear;
    /* transform: scale(1.01); */
    text-shadow: 0 0 1px white, 0 0.1px 4px orangered;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: white;
  position: relative;
  z-index: 5;
  cursor: pointer;
  border: none;
  &:hover {
    color: rgba(255, 68, 0, 0.692);
    font-size: 110%;
    transition: all 0.3s linear;
    transform: scale(1.05);
    text-shadow: 0 0 1px white, 0 0.1px 4px orangered;
    border: 1px inset rgba(255, 68, 0, 0.692);
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
const Header = () => {
  const { cartProducts } = useContext(CartContext)
  const [mobileNavActive, setMobileNavActive] = useState(false)
  return (
    <StyledHeader id='top'>
      <Center>
        <Wrapper>
          <Logo href={'/'}>LiPro Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Header
