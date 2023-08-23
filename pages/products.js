import Center from '@/components/Center'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductsGrid from '@/components/ProductsGrid'
import Title2 from '@/components/Title2'
import Center2 from '@/components/icons/Center2'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function ProductsPage({ products }) {
  return (
    <>
      <Header id='top' />
      <Center>
        <Center2>
          <Title2>
            All <span>products</span>
          </Title2>
        </Center2>
        <ProductsGrid products={products} />
      </Center>
      <Footer />
    </>
  )
}
export async function getServerSideProps() {
  await mongooseConnect()
  const products = await Product.find({}, null, { sort: { _id: -1 } })
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  }
}
