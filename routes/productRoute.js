import { Router } from "express";
import * as productcontroller from '../controller/productController.js'

const productrouter = Router();

productrouter.post('/create', productcontroller.createproductcontroller)

productrouter.get('/get-product', productcontroller.getproductControllers)

productrouter.put('/updated/:id', productcontroller.productupdate);

productrouter.delete('/:id', productcontroller.deleteproduct);

export default productrouter;
