import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../components/HomeLayout.component'
import { Row, Col } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { Product } from '../schemas/product.schema'
import ProductCard from '../components/ProductCard.component'
import { State } from '../schemas/redux.schema'
import { useEffect } from 'react'
import { setItems } from '../redux/actions'


export default function Home() {
  const dispatch = useDispatch()
  useEffect(
    () => {
      async function fetchMyAPI() {
        let response = await axios.get('https://limitless-lake-55070.herokuapp.com/category/')
        let data = await response.data
        dispatch(setItems(data))
      }

      fetchMyAPI()
    }, []
  )
  const category = useSelector((state: State) => state.category)
  const categories = useSelector((state: State) => state.categories)
  function findItems() {
    const allCategoryItems = useSelector((state: State) => state.allCategoryItems)
    let filteredCategory = allCategoryItems.filter(
      item => item.categoryName === category
    )[0]
    return filteredCategory.products
  }
  const products = categories.includes(category) ? findItems() : (useSelector((state: State) => state.allItems))

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomeLayout>
        <main>
          <Row className="justify-content-center my-5" style={{ fontSize: "30px" }}>
            {category === 'all' ? 'ALL PRODUCTS' : category.toUpperCase()}
          </Row>
          <Row className="justify-content-center">
            {
              products.map(
                product =>
                (
                  <ProductCard product={product} key={product.id} />
                )
              )
            }
          </Row>
        </main>
      </HomeLayout>

    </div>
  )
}
