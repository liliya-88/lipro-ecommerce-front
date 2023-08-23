import Featured from '@/components/Featured'
import Header from '@/components/Header'
import NewProducts from '@/components/NewProducts'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'

export default function HomePage({ featuredProduct, newProducts }) {
  /*   console.log(featuredProduct) */
  return (
    <div>
      <Header />
      <main>
        <Featured product={featuredProduct} />
        <NewProducts products={newProducts} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64ced0fd4d3be3f57ec1006b'
  await mongooseConnect()
  const featuredProduct = await Product.findById(featuredProductId)
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  })
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  }
}
