import { styled } from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: rgba(3, 3, 3, 0.95);
  &::placeholder {
    color: rgba(3, 3, 3, 0.5);
  }
  &:focus {
    outline: none;
    background-color: #e8f0fa;
  }
`

const Input = (props) => {
  return <StyledInput {...props} />
}

export default Input
