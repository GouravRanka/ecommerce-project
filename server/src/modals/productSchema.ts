import { Schema,model } from 'mongoose';

// Document interface
interface products {
  data:[],
  // password: string;

}

// Schema
const schema = new Schema<products>({
data :[]
  // password: { type: String, required: true },

});

const productModal = model<products>('Product', schema);
export default productModal



