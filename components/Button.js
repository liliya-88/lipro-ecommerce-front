import styled, { css } from 'styled-components'
import { primary } from '@/lib/colors'

export const ButtonStyle = css`
  background-color: rgba(84, 66, 246, 0.824);
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: scale 0.7s linear;
  &:hover {
    transform: scale(0.96);
    ${(props) =>
      props.white &&
      !props.outline &&
      css`
        box-shadow: 0 0 1px 2px rgb(23, 21, 21), 0 0 2px 3px rgb(23, 21, 21),
          0 0 5px 6px rgb(148, 148, 148);
      `}
    ${(props) =>
      props.white &&
      props.outline &&
      css`
        box-shadow: 0 0 1px 2px rgb(148, 148, 148),
          0 0 2px 3px rgb(148, 148, 148), 0 0 5px 6px rgb(23, 21, 21);
      `}
  }
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${
    '' /*    &::before {
      content: 'The item was added!';
      color: red;
      font-size: 120%;
      padding: 0.3rem;
      background-color:white;
    } */
  }
  ${(props) =>
    props.bold === 'bold' &&
    props.block === 'block' &&
    css`
      color: rgb(0, 59, 0) !important;
      border: rgb(0, 59, 0) 2px inset !important;
      font-family: 'Poppins', sans-serif;
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.payment === 'yes' &&
    props.block &&
    css`
      background-color: rgba(4, 18, 81, 0.85);
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
    ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}
    ${(props) =>
    props.black &&
    !props.outline &&
    css`
      background-color: #000;
      color: #fff;
    `}
    ${(props) =>
    props.black &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1px solid #000;
    `}
    ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      border: 1px solid ${primary};
      color: #fff;
    `}

    ${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 1px solid ${primary};
    `}
    ${(props) =>
    props.size === 1 &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `};
`

const StyledButton = styled.button`
  ${ButtonStyle}
`
const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
