"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _CategoryController = require("./controllers/CategoryController");

var _ClientController = require("./controllers/ClientController");

var _PlatformPurchaseController = require("./controllers/PlatformPurchaseController");

var _ProductController = require("./controllers/ProductController");

var _PurchaseController = require("./controllers/PurchaseController");

var _ReceiptReportController = require("./controllers/ReceiptReportController");

var _StockController = require("./controllers/StockController");

var _SystemUserController = require("./controllers/SystemUserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.default)(); // Router categories

exports.router = router;
router.get('/categories', new _CategoryController.CategoryController().getAll);
router.post('/categories', new _CategoryController.CategoryController().insert);
router.put('/categories', new _CategoryController.CategoryController().update);
router.delete('/categories', new _CategoryController.CategoryController().delete); //router products

router.get('/products', new _ProductController.ProductController().getAll);
router.post('/products', new _ProductController.ProductController().insert);
router.delete('/products', new _ProductController.ProductController().delete);
router.get('/products/:id', new _ProductController.ProductController().getById);
router.put('/products/:id', new _ProductController.ProductController().update); //Clients

router.post('/clients', new _ClientController.ClientController().insert);
router.get('/clients', new _ClientController.ClientController().getAll);
router.get('/clients/:id', new _ClientController.ClientController().getById);
router.delete('/clients/:id', new _ClientController.ClientController().delete);
router.put('/clients/:id', new _ClientController.ClientController().update); // platformPurchases

router.post('/platformPurchases', new _PlatformPurchaseController.PlatformPurchaseController().insert);
router.get('/platformPurchases', new _PlatformPurchaseController.PlatformPurchaseController().getAll);
router.get('/platformPurchases/:id', new _PlatformPurchaseController.PlatformPurchaseController().getById);
router.delete('/platformPurchases/:id', new _PlatformPurchaseController.PlatformPurchaseController().delete);
router.put('/platformPurchases/:id', new _PlatformPurchaseController.PlatformPurchaseController().update); // Purchases

router.post('/purchases', new _PurchaseController.PurchaseController().insert);
router.get('/purchases', new _PurchaseController.PurchaseController().getAll);
router.get('/purchases/:id', new _PurchaseController.PurchaseController().getById);
router.delete('/purchases/:id', new _PurchaseController.PurchaseController().delete);
router.put('/purchases/:id', new _PurchaseController.PurchaseController().update); //stock

router.post('/stocks', new _StockController.StockController().insert);
router.get('/stocks', new _StockController.StockController().getAll); //router.get("/stocks/:id", new StockController().getById);
//router.delete("/stocks/:id", new StockController().delete);
//router.put("/stocks/:id", new StockController().update);
// systemUser

router.post('/systemUsers', new _SystemUserController.SystemUserController().insert);
router.get('/systemUsers', new _SystemUserController.SystemUserController().getAll);
router.get('/systemUsers/:id', new _SystemUserController.SystemUserController().getById);
router.delete('/systemUsers/:id', new _SystemUserController.SystemUserController().delete);
router.put('/systemUsers/:id', new _SystemUserController.SystemUserController().update); //report

router.get('/generateReport', new _ReceiptReportController.ReceiptReportController().generateReport);
router.get('/generateReceiptReport', new _ReceiptReportController.ReceiptReportController().generateReceiptReport);