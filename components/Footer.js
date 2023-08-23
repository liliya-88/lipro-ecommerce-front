import styled, { css } from 'styled-components'
import Link from 'next/link'
import ArrowPhantom from '@/hooks/ArrowPhantom'
import LogoComponent from './Logo'

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(19, 19, 19);
  color: #ccc;
  padding: 1rem 1.1rem;
  min-height: 3rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
const Footer = ({children}) => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <Wrapper>
        <LogoComponent />
        <p className='copyright'>
          © LiPro Ecommerce <span id='date'> {date} </span>All rights Reserved.
        </p>
        <ArrowPhantom />
        {children}
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
