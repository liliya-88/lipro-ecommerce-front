import Center from './Center'
import styled from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'
import BookOpen from './icons/BookOpen'
import ButtonLink from './ButtonLink'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 3rem 0;
`
const Title = styled.h1`
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  /* padding: 0 0.5rem; */
  max-width: 450px;
  height: auto;
`
const Column = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin: 0 auto;
  img {
    max-width: 100%;
    max-height: 450px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
  div:nth-child(1) {
    order: 2;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.9fr 1.1fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`
const ImageWrapper = styled.div`
  img {
    border-radius: 10px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
    outline: 0.5px ridge purple;
  }
  &:hover {
    border-radius: 10px;
    transform: scale3d(1.04, 1.04, 1.04);
    transition: all 0.3s ease-out;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`

const Featured = ({ product }) => {
  const { addProduct } = useContext(CartContext)
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [ addProduct ])
  
  function addFeaturedToCart() {
    addProduct(product._id)
    setClicked(true)
  }

  return (
    <div>
      <Bg>
        <Center>
          <ColumnsWrapper>
            <Column>
              <div>
                <Title>{product.title}</Title>
                <Desc>{product.description}</Desc>
                <ButtonWrapper>
                  <ButtonLink
                    href={'/product/' + product._id}
                    outline={1}
                    white={1}>
                    <BookOpen />
                    Read more
                  </ButtonLink>
                  {clicked ? (
                    <Button white={1} onClick={addFeaturedToCart}>
                      <CartIcon />
                      <mark className='clicked'>Added to cart!</mark>
                    </Button>
                  ) : (
                    <Button white={1} onClick={addFeaturedToCart}>
                      <CartIcon />
                      Add to cart
                    </Button>
                  )}{' '}
                  {/*  <Button white={1} onClick={addFeaturedToCart}>
                    <CartIcon />
                    Add to cart
                  </Button> */}
                </ButtonWrapper>
              </div>
            </Column>
            <Column>
              <ImageWrapper>
                <picture>
                  <source
                    srcSet='https://lipro-ecommerce.s3.amazonaws.com/1691275127076.jpg'
                    type='images/jpg'
                  />
                  <source
                    srcSet='https://lipro-ecommerce.s3.eu-west-2.amazonaws.com/1691275127076.jpg'
                    type='images/png'
                  />
                  <source
                    srcSet='https://lipro-ecommerce.s3.eu-west-2.amazonaws.com/1691275127076.jpg'
                    type='images/jpeg'
                  />
                  <source
                    srcSet='https://lipro-ecommerce.s3.eu-west-2.amazonaws.com/1691275127076.jpg'
                    type='images/webp'
                  />
                  <img
                    src='https://lipro-ecommerce.s3.eu-west-2.amazonaws.com/1691275127076.jpg'
                    alt={`product `}
                  />
                </picture>
              </ImageWrapper>
            </Column>
          </ColumnsWrapper>
        </Center>
      </Bg>
    </div>
  )
}

export default Featured
