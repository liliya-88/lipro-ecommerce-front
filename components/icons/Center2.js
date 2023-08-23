import { styled } from 'styled-components'

const StyledDiv = styled.div`
  margin: 1rem auto;
  padding: 0.2rem 0.5rem;
  min-height: 2.5rem;
  max-width: 100vw;
  display: grid;
  place-items: center;
`

const Center2 = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default Center2
