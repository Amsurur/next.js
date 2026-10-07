import { products } from '../page'

const Page = async ({
    params,
  }: {
    params: Promise<{ productId: string }>
  }) => {
    const {productId} = await params

const product = products.find((e)=>e.id == productId)
  return (
    <div>{product.name}</div>
  )
}

export default Page