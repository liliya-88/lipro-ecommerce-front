import Link from 'next/link'
import styled from 'styled-components'
import Button from './Button'
import CartIcon from './icons/CartIcon'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'

const ProductWrapper = styled.div``

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 13px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  img {
    max-width: 100px;
    max-height: 80px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
  &:hover {
    outline: 1px groove silver;
    transform: scale3d(1.04, 1.04, 1.04);
    transition: all 0.3s ease-out;
  }
  @media screen and (min-width: 768px) {
    img {
      max-width: 550px;
      max-height: 100px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
`
const Title = styled(Link)`
  font-weight: normal;
  font-size: large.9rem;
  color: inherit;
  text-decoration: none;
  display: block;
  text-align: center;
  margin: 0.3rem auto 0.4rem;
  &:hover {
    transition: all 0.3s linear;
    text-decoration: underline;
    text-decoration-color: #6f60f5;
    cursor: pointer;
    text-decoration-style: dotted;
  }
`
const ProductInfoBox = styled.div`
  margin: 0.5rem auto;
`
const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`
const Price = styled.div`
  font-size: 100%;
  font-weight: 400;
  text-align: left;
  font-weight: bold;
  margin: 0 auto;
  display: block;
  text-align: center;
  font-size: 110% !important;
  color: rgba(255, 68, 0, 0.5);
  padding-bottom: 0.15rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif !important;
  font-size: 90%;
  @media screen and (min-width: 768px) {
    font-size: 120%;
    font-weight: 600;
    text-align: left;
  }
`

const ProductBox = ({ _id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext)
  const [clicked, setClicked] = useState(false)
  useEffect(() => {
    const clickedSet = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(clickedSet)
  }, [addProduct])

  const url = '/product/' + _id
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <picture>
            <source srcSet={images[0]} type='images/jpg' />
            <source srcSet={images[0]} type='images/png' />
            <source srcSet={images[0]} type='images/jpeg' />
            <source srcSet={images[0]} type='images/webp' />
            <img src={images[0]} alt='product' />
          </picture>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          {clicked ? (
            <Button
              block='block'
              primary
              outline
              bold='bold'
              onClick={() => {
                addProduct(_id)
                setClicked(true)
              }}>
              <CartIcon />
              <mark className='clicked'>Added to cart!</mark>
            </Button>
          ) : (
            <Button
              block
              primary
              outline
              bold='bold'
              onClick={() => {
                addProduct(_id)
                setClicked(true)
              }}>
              <CartIcon />
              Add to cart
            </Button>
          )}
          {/* <Button
            block
            primary
            outline
            bold='bold'
            onClick={() => {
              addProduct(_id)
              setClicked(true)
            }}>
            <CartIcon />
            Add to cart
          </Button> */}
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  )
}

export default ProductBox
