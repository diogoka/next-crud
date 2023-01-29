import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useProducts from "../hooks/useProducts";

export default function Home() {

  const {
    product,
    products,    
    newProduct, 
    saveProduct, 
    selectProduct, 
    deleteProduct,     
    visibleTable,
    showTable
  } = useProducts()  

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-blue-200
    text-white
    `}>
      <Layout title="Product Registration">
        {visibleTable ? (
          <>
          <div className="flex justify-end">
          <Button className="mb-4" onClick={newProduct}>New Product</Button>
          </div>
          <Table products={products} 
                  productSelected={selectProduct}
                  productDeleted={deleteProduct}        
          />          
          </>
        ):(
          <Form 
              product={product}
              productChanged={saveProduct} 
              canceled={showTable}
          />
        )}
      </Layout>
    </div>
  )
}
