import Product from "../../core/Product";
import ProductRepository from "../../core/ProductRepository";
import firebase from '../config'


export default class CollectionProduct implements ProductRepository{

    converter = {
        toFirestore(product: Product){
            return {
                name: product.name,
                price: product.price,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Product {
            const info = snapshot?.data(options)
            return new Product(info.name, info.price, snapshot.id)
        }
        
    }

    async save(product: Product): Promise<Product>{
        if(product?.id){
            await this.collection().doc(product.id).set(product)
            return product
        } else{
            const docRef = await this.collection().add(product)
            const doc = await docRef.get()
            return doc.data()
        }    
    }

    async delete(product: Product): Promise<void>{
        return this.collection().doc(product.id).delete()
    }

    async getAllProducts(): Promise<Product[]>{
        const query = await this.collection().get()
        return query.docs.map(doc=>doc.data()) ?? []
    }

    private collection(){
        return firebase
                .firestore()
                .collection('product')
                .withConverter(this.converter)
    }

}
