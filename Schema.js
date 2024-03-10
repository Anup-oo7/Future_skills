import mongoose from "mongoose";

const { Schema } = mongoose;

// Define schema for Product
const productSchema = new Schema({
  name: String,
  description: String,
  SKU: String,
  category_id: { type: Schema.Types.ObjectId, ref: 'ProductCategory' }, // Reference to the ProductCategory collection
  inventory_id: String,
  price: String,
  discount_id: String,
  created_at: String,
  modified_at: String,
  deleted_at: String
});

// Define schema for Product Category
const productCategorySchema = new Schema({
  name: String,
  description: String,
  created_at: String,
  modified_at: String,
  deleted_at: String
});

// Define schema for Product Inventory
const productInventorySchema = new Schema({
  quantity: String,
  created_at: String,
  modified_at: String,
  deleted_at: String
});

// Define schema for Discount
const discountSchema = new Schema({
  name: String,
  description: String,
  discount_percentage: Number,
  active: Boolean,
  created_at: String,
  modified_at: String,
  deleted_at: String
});

// Define models
const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

export { Product, ProductCategory, ProductInventory, Discount };
