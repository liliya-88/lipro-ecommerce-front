import Button from '@/components/Button'
import { CartContext } from '@/components/CartContext'
import Center from '@/components/Center'
import Header from '@/components/Header'
import Input from '@/components/Input'
import CartIcon from '@/components/icons/CartIcon'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Table from '../components/Table'
import Link from 'next/link'
import Footer from '@/components/Footer'

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-top: 2.5rem;
  padding: 0 0.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`
const Box = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.8rem;
`
const ProductInfoCell = styled.td`
  padding: 0.6rem;
`
const ParagraphTitle = styled.p`
  padding-top: 0.3rem;
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
  font-size: 95%;
`
const Label = styled.label`
  padding: 1rem 0.05rem;
  color: rgba(4, 18, 81, 0.85);
  &::before {
    content: '*';
    color: rgb(247, 167, 192);
    padding: 0.1rem;
  }
`
const DivWithInput = styled.div`
  margin-bottom: 0.5rem;
`
const DivWithP = styled.div`
  text-align: center;
`
const DivWithButton = styled.div`
  margin: 1rem auto;
  max-width: 60vw;
  @media screen and (min-width: 768px) {
    max-width: 50vw;
  }
`
const Heading2 = styled.h2`
  margin: 1rem auto 1rem;
  text-align: center;
  color: rgba(4, 18, 81, 0.85);
`
const ProductImageBox = styled.div`
  width: 4rem;
  height: 6rem;
  padding: 0.15rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  img {
    max-width: 4rem;
    max-height: 6rem;
  }
  &:hover {
    outline: 1px groove silver;
    transform: scale3d(1.04, 1.04, 1.04);
    transition: all 0.3s ease-out;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    padding: 0.6rem;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`
const QuantityLabel = styled.span`
  padding: 0.11rem 0.9rem;
  display: block;
  margin: 0 auto;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    display: flex;
    padding: 0.11rem 0.95rem;
  }
`
const Total = styled.td`
  padding-top: 0.3rem;
  color: #182c5a;
`
const CityHolder = styled.div`
  display: flex;
  gap: 0.45rem;
`
const CenteredMessage = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  color: green !important;
  line-height: 1.9;
`

/* ------------------------ */
const CartPage = ({ product }) => {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext)
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [country, setCountry] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  // const [inputValue, setInputValue] = useState('')
  /* ----------- */
  
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts }).then((response) => {
        setProducts(response.data)
      })
    } else {
      setProducts([])
    }
  }, [cartProducts])
  /* ----------------- */
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true)
      clearCart()
    }
  }, [clearCart])
  /* ------------ */
  function moreOfThisProduct(id) {
    addProduct(id)
  }
  function lessOfThisProduct(id) {
    removeProduct(id)
  }
  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    })
    if (response.data.url) {
      window.location = response.data.url
    }
  }

  let total = 0
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0
    total += price
  }
  /* --------------- */
  /* ------------------ */
  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <CenteredMessage>
                <h1>✅ Thanks for your order!</h1>
                <p>We will email you when your order will be sent.</p>
              </CenteredMessage>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    )
  }
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <Heading2>
              <span>
                <i>
                  <CartIcon />
                </i>
              </span>
              Shopping Cart
            </Heading2>
            {!cartProducts?.length && (
              <Box>
                <DivWithP>
                  <p>Your cart is empty now.</p>
                </DivWithP>
              </Box>
            )}
            {products?.length > 0 && (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <Link href={'/product/' + product._id}>
                              <picture>
                                <source
                                  srcSet={product.images[0]}
                                  type='images/jpg'
                                />
                                <source
                                  srcSet={product.images[0]}
                                  type='images/png'
                                />
                                <source
                                  srcSet={product.images[0]}
                                  type='images/jpeg'
                                />
                                <source
                                  srcSet={product.images[0]}
                                  type='images/webp'
                                />
                                <img
                                  src={product.images[0]}
                                  alt={product.title}
                                />
                              </picture>
                            </Link>
                          </ProductImageBox>
                          <ParagraphTitle> {product.title}</ParagraphTitle>
                        </ProductInfoCell>
                        <td>
                          <Button
                            onClick={() => lessOfThisProduct(product._id)}>
                            –
                          </Button>
                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <div>
                            <Button
                              onClick={() => moreOfThisProduct(product._id)}>
                              +
                            </Button>
                          </div>
                        </td>
                        <td>
                          $
                          {cartProducts.filter((id) => id === product._id)
                            .length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <Total>
                        <strong style={{ color: 'darkgray' }}>Total:</strong> $
                        {total}
                      </Total>
                    </tr>
                  </tbody>
                </Table>
              </>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <Heading2>Order information</Heading2>
              {/* <form action='/api/checkout' method='POST'> */}
              <DivWithInput>
                <Label htmlFor='name'>Name:</Label>
                <Input
                  type='text'
                  placeholder='Mary'
                  value={name}
                  name='name'
                  onChange={(e) => setName(e.target.value)}
                  style={{ backgroundColor: name ? '#E8F0FE' : 'white' }}
                  required
                />
              </DivWithInput>
              <DivWithInput>
                <Label htmlFor='email'>Email:</Label>
                <Input
                  type='email'
                  placeholder='example@gmail.com'
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
                  style={{ backgroundColor: email ? '#E8F0FE' : 'white' }}
                  required
                />
              </DivWithInput>
              <CityHolder>
                <DivWithInput>
                  <Label htmlFor='city'>City:</Label>
                  <Input
                    type='text'
                    placeholder='London'
                    value={city}
                    name='city'
                    onChange={(e) => setCity(e.target.value)}
                    style={{ backgroundColor: city ? '#E8F0FE' : 'white' }}
                    required
                  />
                </DivWithInput>
                <DivWithInput>
                  <Label htmlFor='postalCode'>Postal code:</Label>
                  <Input
                    type='text'
                    placeholder='EC1A 1AA'
                    value={postalCode}
                    name='postalCode'
                    onChange={(e) => setPostalCode(e.target.value)}
                    style={{
                      backgroundColor: postalCode ? '#E8F0FE' : 'white',
                    }}
                    required
                  />
                </DivWithInput>
              </CityHolder>
              <DivWithInput>
                <Label htmlFor='streetAddress'>Street Address</Label>
                <Input
                  type='text'
                  placeholder='221B Baker Street'
                  value={streetAddress}
                  name='streetAddress'
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </DivWithInput>
              <DivWithInput>
                <Label htmlFor='country'>Country</Label>
                <Input
                  type='text'
                  placeholder='UK'
                  value={country}
                  name='country'
                  onChange={(e) => setCountry(e.target.value)}
                />
              </DivWithInput>
              <DivWithButton>
                <Button payment='yes' block onClick={goToPayment}>
                  Continue to payment
                </Button>
              </DivWithButton>
              {/* </form> */}
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
      <Footer />
    </>
  )
}

export default CartPage
