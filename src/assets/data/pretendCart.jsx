import itemData from "./itemData"
import uniqid from 'uniqid'
const pretendCart= [
    {
        item: itemData[0],
        quantity: 3,
        id: uniqid()
    },
    {
        item: itemData[2],
        quantity: 1,
        id: uniqid()
    },
    {
        item: itemData[4],
        quantity: 1,
        id:uniqid()
    }
]

export default pretendCart;