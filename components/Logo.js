import Link from 'next/link'
import styled, { css } from 'styled-components'

const Lipro = styled.span`
  color: rgba(146, 3, 6, 0.9);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-shadow: 0 0 1px wheat, 0 0 2px whitesmoke;
  letter-spacing: 0.04em;
  font-weight: bold;
`
const Logo = styled(Link)`
  color: whitesmoke;
  position: relative;
  z-index: 3;
  &:hover {
    text-shadow: 0 0 5px yellow, 0 0 10px white;
    transition: all 0.3s ease;
  }
`
function LogoComponent() {
  return (
    <Logo href={'/'}>
      <Lipro className='lipro'>LiPro</Lipro> Ecommerce
    </Logo>
  )
}

export default LogoComponent
