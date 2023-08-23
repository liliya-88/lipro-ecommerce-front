import { styled } from 'styled-components'

const StyledDiv = styled.div`
  margin: 0 auto;
  padding:0.2rem 0.5rem;
  min-height: 2.5rem;
  max-width:100vw;

`

const Center = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default Center
