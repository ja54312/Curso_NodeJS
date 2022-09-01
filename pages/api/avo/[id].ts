import {NextApiRequest,NextApiResponse} from 'next'
import DB from '@database'
import ProductItem from 'pages/product/[id]'

const Product = async(request:NextApiRequest,response:NextApiResponse) => {
    const db = new DB()

    const id = request.query.id
    const entry = await db.getById(id as string)

    response.status(200).json(entry)
}

export default Product