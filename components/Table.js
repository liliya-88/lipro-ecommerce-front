import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #ccc;
    font-weight: 600;
    padding: 0.1rem 0.5rem 0.1rem 0.5rem;
    font-size: 0.7rem;
    /* margin: 0 auto;
    display: table-cell;
    text-align: left;  */
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  @media screen and (min-width: 310px) {
    td {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.1rem 0.5rem 0.1rem 0.5rem;
      margin: 0 auto;
      display: table-cell;
      text-align: left;
      vertical-align: middle !important ;
    }
  }
  @media screen and (min-width: 768px) {
    td {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      padding: 0.1rem 0.5rem 0.1rem 0.5rem;
      margin: 0 auto;
      display: table-cell;
      text-align: left;
      vertical-align: middle !important ;
    }
  }
`
export default function Table(props) {
  return <StyledTable {...props} />
}
