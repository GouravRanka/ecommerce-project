
import productData from '../data/productData'
import productModal from '../modals/productSchema'

const getAllProducts = async()=>{
    try{
// const data = await productModal.find({})
// console.log("this is data from backend",data);
// return data;
// res.send(1)
return 1;
    }
    catch(err){
        console.log("error getting products data",err)
    }
}

export default getAllProducts