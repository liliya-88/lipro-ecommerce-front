import styled from 'styled-components'
import Center from './Center'
import ProductsGrid from './ProductsGrid'
import Footer from './Footer'

const Title = styled.h2`
  font-size: 2rem;
  margin: 2rem 0 1.1rem;
  font-weight: normal;
  text-align: center;
`

const NewProducts = ({ products }) => {
  return (
    <>
      <Center>
        <Title>
          New <span>Arrivals</span>
        </Title>
        <ProductsGrid products={products} />
      </Center>
      <Footer />
    </>
  )
}

export default NewProducts
