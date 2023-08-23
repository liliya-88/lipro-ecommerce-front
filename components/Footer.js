import styled, { css } from 'styled-components'
import Link from 'next/link'
import ArrowPhantom from '@/hooks/ArrowPhantom'

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 0;
  text-align: center;
  margin: 0 auto;
  background-color: rgb(19, 19, 19);
  color: #ccc;
  padding: 1rem 1.1rem;
  min-height: fit-content;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
const Logo = styled(Link)`
  color: whitesmoke;
  position: relative;
  z-index: 3;
`
const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <StyledFooter>
      <Wrapper>
        <Logo href={'/'}>LiPro Ecommerce</Logo>
        <p className='copyright'>
          © LiPro Ecommerce <span id='date'> {date} </span>All rights Reserved.
        </p>
        <ArrowPhantom />
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer
