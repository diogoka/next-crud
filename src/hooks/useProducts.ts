import { useEffect, useState } from "react"
import CollectionProduct from "../backend/db/CollectionProduct"
import Product from "../core/Product"
import ProductRepository from "../core/ProductRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients(){
    
const repo: ProductRepository = new CollectionProduct()

  const {
      visibleTable, 
      showTable, 
      showForm
    } = useTableOrForm()
  
  const[product, setProduct] = useState<Product>(Product.empty)
  const[products, setProducts] = useState<Product[]>([])

  useEffect(getAll,[])
  
  function getAll() {
    repo.getAllProducts().then(products =>{
        setProducts(products)
        showTable()
    })
  }

  function selectProduct(product:Product){
    setProduct(product)
    showForm()
  }

  async function deleteProduct(product:Product){
      await repo.delete(product)
      getAll()
  }

  async function saveProduct(product:Product){
    await repo.save(product)
    getAll()
  }

  function newProduct(){
    setProduct(Product.empty())
    showForm()
  }

  return{
      product,
      products,      
      newProduct,
      saveProduct,
      deleteProduct,
      selectProduct,
      getAll,
      visibleTable,
      showTable
  }
}