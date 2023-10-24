//import itemData from "./itemData"
import image0 from "../assets/images/plum_quilted_jacket.jpg"
import image1 from "../assets/images/basque_spring_dress.jpg"
//import {useState} from "react"
import uniqid from 'uniqid'
const pretendCart= [
    {
        item:
            {
                name:"plum quilted jacket",
                path: "/profile/plum_quilted_jacket",
                price: "$300",
                image: image0,
                description:" A quilted jacket created using the Tamarack pattern by Grainline Studios, sewn by LauraKirbySews ",
                id:0
            }
        ,
        quantity: 2,
        id: uniqid()
    },

    {
        item:{
            name:"basque spring dress",
            path:"/profile/basque_spring_dress",
            currency:"$",
            price:"500",
            image: image1,
            description:"",
            id:1
            },
        quantity: 3,
        id:uniqid()
    }
]

export default pretendCart;