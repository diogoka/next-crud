import Product from "./Product";


export default interface ProductRepository {
    save(product: Product): Promise<Product>
    delete(product: Product): Promise<void>
    getAllProducts(): Promise<Product[]>
}