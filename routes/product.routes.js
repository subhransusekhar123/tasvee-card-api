const express = require('express');
const productRouter = express.Router();
const { productGetController,productPostController,productUpdateController,productDeleteController } = require('../controllers/product.controller');
const multipart = require('connect-multiparty');
const path  = require('path')
const multipartMiddleware = multipart({uploadDir:path.join(__dirname,"image")});


productRouter.get("/",productGetController)
productRouter.post("/upload",multipartMiddleware,productPostController)
productRouter.put("/:id",productUpdateController);
productRouter.delete("/:id",productDeleteController)

module.exports = productRouter;