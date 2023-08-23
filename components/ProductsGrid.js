import styled, { css } from 'styled-components'
import ProductBox from '@/components/ProductBox'

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30vw, 2fr));
  gap: 2.5rem 1.1rem;
  place-items: center;
  margin: 4rem auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(23vw, 4fr));
    gap: 3.5rem 0.5rem;
  }
`

export default function ProductsGrid({ products }) {
  return (
    <>
      <StyledProductsGrid>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product._id} {...product} />
          ))}
      </StyledProductsGrid>
    </>
  )
}

{
  /* <ProductBox key={product._id} {...product} /> */
}

/* grid-template-columns: repeat(auto-fit, minmax(auto, 4fr)); */
/* grid-template-columns: repeat(auto-fit, minmax(auto, 2fr)); */
