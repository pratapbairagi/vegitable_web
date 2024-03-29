import { useDispatch, useSelector } from "react-redux"
import About from "../component/about"
import Cart from "../component/cart"
import Contact from "../component/contact"
import Features from "../component/features"
import Footer from "../component/footer"
import Hero from "../component/hero"
import Login from "../component/login"
import Most_selling_section from "../component/most_selling_section"
import Navbar from "../component/navbar"
import Service_features from "../component/service_features"
import Service_feedbacks from "../component/service_feedbacks"
import Shop_by_category from "../component/shop_by_category"
import Todays_special from "../component/todays_special"
import React, { useEffect, useState } from "react"
import { get_products } from "../redux/product/action"


const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector(state=> state.product);
    const [searchFilter, setSeachFilter] = useState({
        category : "",
        title : "",
        price : {
            lte : 0,
            gte : 1000
        },
        tags : [],
        features : []
    })

    let x = 0
    useEffect(()=>{
        if(state.products.length == 0 && state.success == false ){
            if(x == 0 ){
                x++
            dispatch(get_products({
                title : searchFilter.title,
                category : searchFilter.category,
                price : searchFilter.price,
                tags : searchFilter.tags,
                features : searchFilter.features
            }))

            console.log("useEffect")
            }
        }
       
      },[])

console.log("render")

   
    return (
        <div className='relative' style={{background:"rgb(248, 248, 248)"}}>
            <Hero />
            <Features />
            <About />
            <Most_selling_section products={state.products.slice(0,4)}  />
            <Shop_by_category />
            <Todays_special products={state} />
            <Service_features />
            <Service_feedbacks />
            <Contact />
        </div>
    )
}

export default Home