import Button from '@/components/Button'
import { CartContext } from '@/components/CartContext'
import Center from '@/components/Center'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductImages from '@/components/ProductImages'
import Title2 from '@/components/Title2'
import WhiteBox from '@/components/WhiteBox'
import CartIcon from '@/components/icons/CartIcon'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90vw, 2fr));
  gap: 2.5rem 3.5rem;
  place-items: center;
  margin: 4rem auto;
  @media screen and (min-width: 620px) {
    grid-template-columns: repeat(auto-fit, minmax(47vw, 2fr));
    gap: 2.5rem 2.5rrem;
  }
`
const Paragragh = styled.p`
  padding: 0.9rem;
`
const Div = styled.div`
  padding: 0 0.9rem;
`
const PriceRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`
const Price = styled.span`
  font-size: 140%;
`
const ParagraphBox = styled.div`
  padding: 0.5rem;
  max-width: 95vw;
`
export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext)
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [addProduct])
  function addFeaturedToCart() {
    addProduct(product._id)
    setClicked(true)
  }

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <ParagraphBox>
            <Title2>{product.title}</Title2>
            <Paragragh>{product.description}</Paragragh>
            <PriceRow>
              <Div>
                <br />
                <Price>${product.price}</Price>
              </Div>
              <Div>
                <br />
                {clicked ? (
                  <Button primary onClick={addFeaturedToCart}>
                    <CartIcon />
                    <mark className='clicked'>Added to cart!</mark>
                  </Button>
                ) : (
                  <Button primary onClick={addFeaturedToCart}>
                    <CartIcon />
                    Add to cart
                  </Button>
                )}
              </Div>
            </PriceRow>
          </ParagraphBox>
        </ColWrapper>
      </Center>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  await mongooseConnect()
  const { id } = context.query
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  }
}
